import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function fetchStatus(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      resolve({ status: res.statusCode });
    }).on('error', reject);
  });
}

async function main() {
  const shotsDir = path.resolve('redesign-shots');
  if (!fs.existsSync(shotsDir)) {
    fs.mkdirSync(shotsDir, { recursive: true });
  }

  console.log('Starting preview server...');
  const preview = spawn('npx', ['astro', 'preview', '--port', '4321', '--ignore-lock'], {
    stdio: 'pipe'
  });

  preview.stdout.on('data', d => console.log('[astro preview]:', d.toString().trim()));
  preview.stderr.on('data', d => console.error('[astro preview err]:', d.toString().trim()));

  // Wait for server ready
  let ready = false;
  for (let i = 0; i < 40; i++) {
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

  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const targets = [
    { name: 'screenshot-1440px-light.png', width: 1440, height: 900, theme: 'light' },
    { name: 'screenshot-1440px-dark.png', width: 1440, height: 900, theme: 'dark' },
    { name: 'screenshot-375px-light.png', width: 375, height: 812, theme: 'light' },
    { name: 'screenshot-375px-dark.png', width: 375, height: 812, theme: 'dark' }
  ];

  for (const t of targets) {
    const page = await browser.newPage();
    await page.setViewport({ width: t.width, height: t.height, deviceScaleFactor: 2 });
    await page.goto('http://localhost:4321/', { waitUntil: 'networkidle0' });

    // Set theme explicitly
    await page.evaluate((theme) => {
      if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
    }, t.theme);

    // Wait a brief moment for styles/images to settle
    await wait(400);

    const outPath = path.join(shotsDir, t.name);
    await page.screenshot({ path: outPath, fullPage: true });
    console.log(`Saved screenshot: ${outPath}`);
    await page.close();
  }

  await browser.close();
  preview.kill();
  console.log('All screenshots captured successfully!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
