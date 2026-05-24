import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASTRO_URL = 'http://localhost:4321';
const HTML_FILE = path.resolve(__dirname, '../../portfolio.html');
const SCREENSHOTS_DIR = path.resolve(__dirname, '../test-results/screenshots');

const SECTIONS = [
  { name: 'hero',        selector: '#hero' },
  { name: 'about',       selector: '#about' },
  { name: 'skills',      selector: '#skills' },
  { name: 'education',   selector: '#education' },
  { name: 'credentials', selector: '#credentials' },
  { name: 'projects',    selector: '#projects' },
  { name: 'experience',  selector: '#experience' },
  { name: 'contact',     selector: '#contact' },
];

test.beforeAll(() => {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
});

test.describe('Visual comparison: Astro vs original HTML', () => {

  test('Full page – Astro', async ({ page }) => {
    await page.goto(ASTRO_URL, { waitUntil: 'networkidle' });
    await page.waitForTimeout(800); // let typewriter + animations settle
    await page.screenshot({
      path: path.join(SCREENSHOTS_DIR, 'astro-fullpage.png'),
      fullPage: true,
    });
    console.log('✅ Astro full-page screenshot saved');
  });

  test('Full page – Original HTML', async ({ page }) => {
    await page.goto(`file://${HTML_FILE}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(800);
    await page.screenshot({
      path: path.join(SCREENSHOTS_DIR, 'original-fullpage.png'),
      fullPage: true,
    });
    console.log('✅ Original full-page screenshot saved');
  });

  for (const section of SECTIONS) {
    test(`Section "${section.name}" – Astro renders`, async ({ page }) => {
      await page.goto(ASTRO_URL, { waitUntil: 'networkidle' });
      const el = page.locator(section.selector);
      await expect(el).toBeVisible();
      await el.scrollIntoViewIfNeeded();
      await page.waitForTimeout(400);
      await el.screenshot({
        path: path.join(SCREENSHOTS_DIR, `astro-${section.name}.png`),
      });
      console.log(`✅ Astro #${section.name} screenshot saved`);
    });

    test(`Section "${section.name}" – Original HTML renders`, async ({ page }) => {
      await page.goto(`file://${HTML_FILE}`, { waitUntil: 'networkidle' });
      const el = page.locator(section.selector);
      await expect(el).toBeVisible();
      await el.scrollIntoViewIfNeeded();
      await page.waitForTimeout(400);
      await el.screenshot({
        path: path.join(SCREENSHOTS_DIR, `original-${section.name}.png`),
      });
      console.log(`✅ Original #${section.name} screenshot saved`);
    });
  }

  test('Nav is present and links match – Astro', async ({ page }) => {
    await page.goto(ASTRO_URL, { waitUntil: 'networkidle' });
    const navLinks = page.locator('.nav-links a');
    await expect(navLinks).toHaveCount(6);
    const hrefs = await navLinks.evaluateAll(els =>
      els.map(a => (a as HTMLAnchorElement).getAttribute('href'))
    );
    expect(hrefs).toEqual(['#about', '#skills', '#education', '#projects', '#experience', '#contact']);
  });

  test('Project cards rendered – Astro', async ({ page }) => {
    await page.goto(ASTRO_URL, { waitUntil: 'networkidle' });
    const cards = page.locator('.project-card');
    await expect(cards).toHaveCount(7);
  });

  test('Project cards rendered – Original HTML', async ({ page }) => {
    await page.goto(`file://${HTML_FILE}`, { waitUntil: 'networkidle' });
    const cards = page.locator('.project-card');
    await expect(cards).toHaveCount(7);
  });

  test('Skill groups rendered – Astro', async ({ page }) => {
    await page.goto(ASTRO_URL, { waitUntil: 'networkidle' });
    const groups = page.locator('.skill-group');
    await expect(groups).toHaveCount(9);
  });

  test('Timeline items rendered – Astro', async ({ page }) => {
    await page.goto(ASTRO_URL, { waitUntil: 'networkidle' });
    const items = page.locator('.timeline-item');
    await expect(items).toHaveCount(4);
  });

  test('Cert cards rendered – Astro', async ({ page }) => {
    await page.goto(ASTRO_URL, { waitUntil: 'networkidle' });
    const certs = page.locator('.cert-card');
    await expect(certs).toHaveCount(5);
  });

  test('Hero avatar visible – Astro', async ({ page }) => {
    await page.goto(ASTRO_URL, { waitUntil: 'networkidle' });
    await expect(page.locator('.hero-avatar img')).toBeVisible();
  });

  test('Page title matches – Astro', async ({ page }) => {
    await page.goto(ASTRO_URL, { waitUntil: 'networkidle' });
    await expect(page).toHaveTitle('Joshua Jiménez — Full-Stack Developer');
  });
});
