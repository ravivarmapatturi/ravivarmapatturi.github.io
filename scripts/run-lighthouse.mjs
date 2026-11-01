import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';

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

async function run() {
  console.log('Starting preview...');
  const preview = spawn('npx', ['astro', 'preview', '--port', '4321', '--ignore-lock'], { stdio: 'pipe' });

  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetchStatus('http://localhost:4321/');
      if (res.status === 200) break;
    } catch (_) {
      await wait(400);
    }
  }

  console.log('Running Lighthouse...');
  const lh = spawn('npx', [
    'lighthouse',
    'http://localhost:4321/',
    '--output=json',
    '--output-path=redesign-shots/lighthouse.json',
    '--chrome-flags=--headless=new --no-sandbox --disable-gpu',
    '--only-categories=performance,accessibility,best-practices,seo'
  ], { stdio: 'inherit' });

  lh.on('close', (code) => {
    preview.kill();
    const result = JSON.parse(fs.readFileSync('redesign-shots/lighthouse.json', 'utf8'));
    console.log('\n--- FINAL LIGHTHOUSE SCORES ---');
    console.log('Performance:   ', Math.round(result.categories.performance.score * 100));
    console.log('Accessibility: ', Math.round(result.categories.accessibility.score * 100));
    console.log('Best Practices:', Math.round(result.categories['best-practices'].score * 100));
    console.log('SEO:           ', Math.round(result.categories.seo.score * 100));
    process.exit(code);
  });
}

run();
