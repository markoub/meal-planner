import { test, expect } from '@playwright/test';

test.describe('Dashboard with Mock Data', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display responsive navigation bar', async ({ page }) => {
    // Check for navigation existence
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    
    // Check for main navigation sections
    await expect(page.locator('nav').getByRole('link', { name: 'Dashboard' })).toBeVisible();
    await expect(page.locator('nav').getByRole('link', { name: 'Food Log' })).toBeVisible();
    await expect(page.locator('nav').getByRole('link', { name: 'Meal Plan' })).toBeVisible();
    await expect(page.locator('nav').getByRole('link', { name: 'Progress' })).toBeVisible();
    
    // Test mobile responsiveness - check if mobile menu button exists
    await page.setViewportSize({ width: 375, height: 667 }); // Mobile size
    const mobileMenuButton = page.locator('[data-testid="mobile-menu-button"]');
    if (await mobileMenuButton.count() > 0) {
      await expect(mobileMenuButton).toBeVisible();
    }
  });

  test('should display daily calorie progress bar with mock data', async ({ page }) => {
    // Check for calorie progress bar
    const progressBar = page.locator('[data-testid="calorie-progress"]');
    await expect(progressBar).toBeVisible();
    
    // Check for progress bar elements
    await expect(page.locator('[data-testid="current-calories"]')).toBeVisible();
    await expect(page.locator('[data-testid="target-calories"]')).toBeVisible();
    
    // Verify progress bar has some visual indication
    const progressFill = page.locator('[data-testid="progress-fill"]');
    await expect(progressFill).toBeVisible();
  });

  test('should display sample daily food log', async ({ page }) => {
    // Check for food log section
    const foodLog = page.locator('[data-testid="daily-food-log"]');
    await expect(foodLog).toBeVisible();
    
    // Check for meal categories
    await expect(page.locator('[data-testid="breakfast-meals"]')).toBeVisible();
    await expect(page.locator('[data-testid="lunch-meals"]')).toBeVisible();
    await expect(page.locator('[data-testid="dinner-meals"]')).toBeVisible();
    await expect(page.locator('[data-testid="snacks-meals"]')).toBeVisible();
    
    // Check for at least one food item in each category
    const foodItems = page.locator('[data-testid="food-item"]');
    await expect(foodItems).toHaveCount(10); // We have 10 mock food items
  });

  test('should display basic stats cards', async ({ page }) => {
    // Check for stats cards
    const caloriesCard = page.locator('[data-testid="calories-card"]');
    const proteinCard = page.locator('[data-testid="protein-card"]');
    const carbsCard = page.locator('[data-testid="carbs-card"]');
    const fatCard = page.locator('[data-testid="fat-card"]');
    
    await expect(caloriesCard).toBeVisible();
    await expect(proteinCard).toBeVisible();
    await expect(carbsCard).toBeVisible();
    await expect(fatCard).toBeVisible();
    
    // Check that stats cards have numeric values
    await expect(caloriesCard.locator('[data-testid="stat-value"]')).toContainText(/\d+/);
    await expect(proteinCard.locator('[data-testid="stat-value"]')).toContainText(/\d+/);
    await expect(carbsCard.locator('[data-testid="stat-value"]')).toContainText(/\d+/);
    await expect(fatCard.locator('[data-testid="stat-value"]')).toContainText(/\d+/);
  });

  test('should have clean, modern UI design with Tailwind CSS', async ({ page }) => {
    // Check for modern design elements
    const body = page.locator('body');
    
    // Verify Tailwind CSS classes are applied
    const modernElements = page.locator('[class*="rounded"], [class*="shadow"], [class*="bg-"], [class*="text-"]');
    await expect(modernElements.first()).toBeVisible();
    
    // Check for proper spacing and layout
    const container = page.locator('[class*="container"], [class*="max-w-"], [class*="mx-auto"]');
    await expect(container.first()).toBeVisible();
    
    // Verify cards have proper styling
    const cards = page.locator('[class*="bg-white"], [class*="shadow"], [class*="rounded"]');
    await expect(cards.first()).toBeVisible();
  });

  test('should be mobile-responsive', async ({ page }) => {
    // Test different viewport sizes
    const viewports = [
      { width: 320, height: 568 }, // iPhone SE
      { width: 768, height: 1024 }, // iPad
      { width: 1024, height: 768 }, // Desktop small
      { width: 1920, height: 1080 }  // Desktop large
    ];

    for (const viewport of viewports) {
      await page.setViewportSize(viewport);
      
      // Check that main elements are still visible
      await expect(page.locator('[data-testid="calories-card"]')).toBeVisible();
      await expect(page.locator('[data-testid="daily-food-log"]')).toBeVisible();
      
      // Check that main elements are still visible and layout doesn't break
      const body = page.locator('body');
      await expect(body).toBeVisible();
      
      // Check that no horizontal scrollbar appears
      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });
      expect(hasHorizontalScroll).toBeFalsy();
    }
  });

  test('should display mock data correctly', async ({ page }) => {
    // Verify that mock data is realistic and properly formatted
    
    // Check calorie values are reasonable
    const currentCalories = await page.locator('[data-testid="current-calories"]').textContent();
    const targetCalories = await page.locator('[data-testid="target-calories"]').textContent();
    
    expect(currentCalories).toMatch(/\d+/);
    expect(targetCalories).toMatch(/\d+/);
    
    // Check that food items have names and calorie counts
    const foodItems = page.locator('[data-testid="food-item"]');
    const firstFood = foodItems.first();
    
    await expect(firstFood.locator('[data-testid="food-name"]')).not.toBeEmpty();
    await expect(firstFood.locator('[data-testid="food-calories"]')).toContainText(/\d+.*cal/i);
  });
}); 