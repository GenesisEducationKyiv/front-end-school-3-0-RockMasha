import { test, expect } from '@playwright/test'

const coverImgUrl =
  'https://res.cloudinary.com/dk3syrsg5/image/upload/c_scale,h_175,w_175/v1741982686/leafofhopeAdverts/dnxx7pkopjkmbqtwptrp.jpg'

test.describe('Create Track', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000', { timeout: 60000 })
  })

  test('should create a new track successfully', async ({ page }) => {
    await page.click('[data-testid="create-track-button"]')
    await expect(page.locator('[data-testid="track-form"]')).toBeVisible({
      timeout: 5000,
    })
    await page.waitForTimeout(1000)
    await page.fill('[data-testid="input-title"]', 'Test Track')
    await page.fill('[data-testid="input-artist"]', 'Test Artist')
    await page.fill('[data-testid="input-album"]', 'Test Album')
    await page.fill('[data-testid="input-cover-image"]', coverImgUrl)
    await page.click('[data-testid="open-genre-select"]')
    await expect(page.locator('[data-testid="genre-selector"]')).toBeVisible()
    await page.selectOption('[data-testid="genre-selector"]', 'Rock')
    await page.click('[data-testid="track-form"] [data-testid="add-genre"]')
    await expect(page.locator('[data-testid="track-form"]')).toContainText(
      '#Rock'
    )
    await page.click('[data-testid="submit-button"]')
    await expect(page.locator('[data-testid="track-form"]')).toHaveCount(0, {
      timeout: 10000,
    })
    await expect(page.locator('[data-testid="toast-container"]')).toBeVisible()
  })

  test('should display validation errors for empty fields', async ({
    page,
  }) => {
    await page.click('[data-testid="create-track-button"]')
    await page.click('[data-testid="submit-button"]')
    await expect(page.locator('[data-testid="error-title"]')).toBeVisible()
    await expect(page.locator('[data-testid="error-artist"]')).toBeVisible()
  })

  test('should close modal on refuseRedact', async ({ page }) => {
    await page.click('[data-testid="create-track-button"]')
    await page.click('[data-testid="track-form"] svg[data-testid="cross-svg"]')
    await expect(page.locator('[data-testid="track-form"]')).not.toBeVisible()
  })

  test('should add and remove genres', async ({ page }) => {
    await page.click('[data-testid="create-track-button"]')
    await page.click(
      '[data-testid="track-form"] [data-testid="open-genre-select"]'
    )
    await page.selectOption('[data-testid="genre-selector"]', 'Pop')
    await page.click('[data-testid="track-form"] [data-testid="add-genre"]')
    await expect(page.locator('[data-testid="track-form"]')).toContainText(
      '#Pop'
    )
    await page.click(
      '[data-testid="track-form"] [data-testid="open-genre-select"]'
    )
    await page.selectOption('[data-testid="genre-selector"]', 'Jazz')
    await page.click('[data-testid="track-form"] [data-testid="add-genre"]')
    await expect(page.locator('[data-testid="track-form"]')).toContainText(
      '#Jazz'
    )
    await page.click(
      '[data-testid="track-form"] .delete-wrap[data-genre="Pop"] [data-testid="remove-genre"]'
    )
    await expect(page.locator('[data-testid="track-form"]')).not.toContainText(
      '#Pop'
    )
    await expect(page.locator('[data-testid="track-form"]')).toContainText(
      '#Jazz'
    )
  })
})
