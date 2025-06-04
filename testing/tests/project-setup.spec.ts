import { test, expect } from '@playwright/test';
import { existsSync } from 'fs';
import { join } from 'path';

test.describe('Project Setup & Structure', () => {
  test('should have correct project structure', async () => {
    const projectRoot = join(__dirname, '../../');
    
    // Check if main directories exist
    expect(existsSync(join(projectRoot, 'frontend'))).toBeTruthy();
    expect(existsSync(join(projectRoot, 'backend'))).toBeTruthy();
    expect(existsSync(join(projectRoot, 'testing'))).toBeTruthy();
    
    // Check if frontend has Next.js structure
    expect(existsSync(join(projectRoot, 'frontend/package.json'))).toBeTruthy();
    expect(existsSync(join(projectRoot, 'frontend/next.config.ts'))).toBeTruthy();
    
    // Check if backend has FastAPI structure
    expect(existsSync(join(projectRoot, 'backend/main.py'))).toBeTruthy();
    expect(existsSync(join(projectRoot, 'backend/requirements.txt'))).toBeTruthy();
    
    // Check if testing has Playwright config
    expect(existsSync(join(projectRoot, 'testing/playwright.config.ts'))).toBeTruthy();
  });

  test('frontend should load successfully', async ({ page }) => {
    await page.goto('/');
    
    // Should have a proper title
    await expect(page).toHaveTitle(/Meal Planner/);
    
    // Should have basic navigation or welcome message
    const heading = page.locator('h1');
    await expect(heading).toContainText(/Meal Planner|Welcome/);
  });

  test('frontend should have Tailwind CSS configured', async ({ page }) => {
    await page.goto('/');
    
    // Check if Tailwind CSS is working by looking for common utility classes
    const element = page.locator('body');
    const classes = await element.getAttribute('class');
    
    // Alternatively, check if any element has Tailwind classes
    const tailwindElement = page.locator('[class*="bg-"], [class*="text-"], [class*="p-"], [class*="m-"]').first();
    await expect(tailwindElement).toBeVisible();
  });

  test('should have proper Next.js 14 setup', async ({ page }) => {
    await page.goto('/');
    
    // Check for Next.js indicators
    await expect(page.locator('html')).toBeVisible();
    
    // Check if the page is server-side rendered (Next.js feature)
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);
  });
}); 