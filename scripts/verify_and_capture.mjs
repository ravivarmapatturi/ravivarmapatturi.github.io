import http from 'http';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import { execSync } from 'child_process';

const port = 4321;
const baseUrl = `http://127.0.0.1:${port}`;
const shotsDir = path.resolve('redesign-shots');
if (!fs.existsSync(shotsDir)) {
  fs.mkdirSync(shotsDir, { recursive: true });
}

async function run() {
  console.log(`Connecting to preview server at ${baseUrl}...`);

  // 1. Link verification
  const linksToCheck = [
    '/',
    '/assets/pdf/Ravivarma_Patturi_Resume.pdf',
    '/assets/img/PROFILE.png',
    '/assets/img/building/inferedge.png',
    '/assets/img/building/neuralmastery.png',
    '/assets/img/building/huggingface.png',
    '/assets/img/building/youtube.jpg',
    '/favicon.svg',
    '/og-image.png',
    '/robots.txt',
    '/sitemap-index.xml',
    '/sitemap-0.xml'
  ];

  console.log('\n--- VERIFYING LOCAL LINKS ---');
  for (const urlPath of linksToCheck) {
    const status = await new Promise((resolve) => {
      http.get(`${baseUrl}${urlPath}`, (res) => {
        resolve(res.statusCode);
      }).on('error', (err) => {
        console.error(`Error requesting ${urlPath}:`, err.message);
        resolve(500);
      });
    });
    console.log(`Link: ${urlPath.padEnd(45)} -> ${status === 200 ? '200 OK' : 'FAILED: ' + status}`);
    if (status !== 200) {
      throw new Error(`Failed to load ${urlPath} with status ${status}`);
    }
  }

  // 2. Puppeteer Screenshots
  console.log('\n--- CAPTURING SCREENSHOTS (375px & 1440px, Light & Dark) ---');
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // 375px Mobile Viewport
  await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });
  await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle0' });

  // Check horizontal scroll
  const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  console.log(`Mobile (375px) scrollWidth: ${scrollWidth}px (overflow: ${scrollWidth > 375 ? 'YES - BUG' : 'NO - PERFECT'})`);

  // Light theme
  await page.evaluate(() => {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  });
  await new Promise(r => setTimeout(r, 200));
  await page.screenshot({ path: path.join(shotsDir, '375px-light.png'), fullPage: true });
  console.log('Saved redesign-shots/375px-light.png');

  // Switch to dark theme
  await page.evaluate(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  });
  await new Promise(r => setTimeout(r, 200));
  await page.screenshot({ path: path.join(shotsDir, '375px-dark.png'), fullPage: true });
  console.log('Saved redesign-shots/375px-dark.png');

  // 1440px Desktop Viewport
  await page.setViewport({ width: 1440, height: 900 });
  
  // Light theme
  await page.evaluate(() => {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  });
  await new Promise(r => setTimeout(r, 200));
  await page.screenshot({ path: path.join(shotsDir, '1440px-light.png'), fullPage: true });
  console.log('Saved redesign-shots/1440px-light.png');

  // Dark theme
  await page.evaluate(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  });
  await new Promise(r => setTimeout(r, 200));
  await page.screenshot({ path: path.join(shotsDir, '1440px-dark.png'), fullPage: true });
  console.log('Saved redesign-shots/1440px-dark.png');

  await browser.close();

  // 3. Run Lighthouse Audit
  console.log('\n--- RUNNING LIGHTHOUSE AUDIT ---');
  execSync(
    `npx lighthouse ${baseUrl}/ --chrome-flags="--headless --no-sandbox --disable-gpu" --output=json --output-path=redesign-shots/lighthouse.json --quiet`,
    { encoding: 'utf-8' }
  );
  const lhReport = JSON.parse(fs.readFileSync('redesign-shots/lighthouse.json', 'utf-8'));
  const categories = lhReport.categories;
  console.log('Lighthouse Results:');
  console.log(`  Performance:    ${Math.round(categories.performance.score * 100)}`);
  console.log(`  Accessibility:  ${Math.round(categories.accessibility.score * 100)}`);
  console.log(`  Best Practices: ${Math.round(categories['best-practices'].score * 100)}`);
  console.log(`  SEO:            ${Math.round(categories.seo.score * 100)}`);

  console.log('\nAll verification steps completed successfully!');
}

run().catch((err) => {
  console.error('Error during verification:', err);
  process.exit(1);
});
