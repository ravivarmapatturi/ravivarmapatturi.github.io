import { spawn } from 'child_process';
import http from 'http';

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function fetchStatus(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      resolve({ status: res.statusCode, headers: res.headers });
    }).on('error', reject);
  });
}

async function main() {
  console.log('Starting astro preview...');
  const preview = spawn('npx', ['astro', 'preview', '--port', '4321'], {
    stdio: 'pipe'
  });

  preview.stdout.on('data', d => process.stdout.write(d.toString()));
  preview.stderr.on('data', d => process.stderr.write(d.toString()));

  // Wait for server ready
  let ready = false;
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetchStatus('http://localhost:4321/');
      if (res.status === 200) {
        ready = true;
        break;
      }
    } catch (_) {
      await wait(500);
    }
  }

  if (!ready) {
    console.error('Server failed to start on port 4321');
    preview.kill();
    process.exit(1);
  }

  // Get index.html
  const html = await new Promise((resolve, reject) => {
    http.get('http://localhost:4321/', (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });

  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map(m => m[1]);
  const srcs = [...html.matchAll(/src="([^"]+)"/g)].map(m => m[1]);

  const allUrls = [...new Set([...hrefs, ...srcs])];
  const localUrls = allUrls.filter(u => u.startsWith('/') && !u.startsWith('//'));

  // Also check sitemap and robots
  localUrls.push('/robots.txt', '/sitemap-index.xml', '/sitemap-0.xml');

  console.log('\n--- Checking local assets and endpoints ---');
  let hasError = false;
  for (const urlPath of [...new Set(localUrls)]) {
    const fullUrl = `http://localhost:4321${urlPath}`;
    try {
      const { status } = await fetchStatus(fullUrl);
      if (status === 200) {
        console.log(`[PASS 200] ${urlPath}`);
      } else {
        console.error(`[FAIL ${status}] ${urlPath}`);
        hasError = true;
      }
    } catch (e) {
      console.error(`[ERROR] ${urlPath}: ${e.message}`);
      hasError = true;
    }
  }

  preview.kill();
  if (hasError) {
    console.error('\nSome local links failed!');
    process.exit(1);
  } else {
    console.log('\nAll local links returned 200 OK!');
    process.exit(0);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
