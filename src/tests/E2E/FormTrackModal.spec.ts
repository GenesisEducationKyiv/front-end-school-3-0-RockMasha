import type { Genre } from '@/types'
import { test, expect, type Page } from '@playwright/test'

function getByTestIdTemple(page: Page, testId: string) {
  return page.locator(`[data-testid="${testId}"]`)
}

const coverImgUrl =
  'https://res.cloudinary.com/dk3syrsg5/image/upload/c_scale,h_175,w_175/v1741982686/leafofhopeAdverts/dnxx7pkopjkmbqtwptrp.jpg'

test.describe('Create Track', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000', { timeout: 60000 })
  })

  test('should create a new track successfully', async ({ page }) => {
    const getByTestId = getByTestIdTemple.bind(null, page)
    await page.click('[data-testid="create-track-button"]')
    await expect(getByTestId('track-form')).toBeVisible()
    await page.fill('[data-testid="input-title"]', 'Test Track')
    await page.fill('[data-testid="input-artist"]', 'Test Artist')
    await page.fill('[data-testid="input-album"]', 'Test Album')
    await page.fill('[data-testid="input-cover-image"]', coverImgUrl)
    await addGenre(page, 'Rock')
    await page.click('[data-testid="submit-button"]')
    await expect(getByTestId('track-form')).not.toBeVisible()
    await expect(getByTestId('toast-container')).toBeVisible()
  })

  test('should display validation errors for empty fields', async ({
    page,
  }) => {
    const getByTestId = getByTestIdTemple.bind(null, page)
    await page.click('[data-testid="create-track-button"]')
    await page.click('[data-testid="submit-button"]')
    await expect(getByTestId('error-title')).toBeVisible()
    await expect(getByTestId('error-artist')).toBeVisible()
  })

  test('should close modal on refuseRedact', async ({ page }) => {
    await page.click('[data-testid="create-track-button"]')
    await page.click('[data-testid="track-form"] svg[data-testid="cross-svg"]')
    await expect(page.locator('[data-testid="track-form"]')).not.toBeVisible()
  })

  test('should add and remove genres', async ({ page }) => {
    const getByTestId = getByTestIdTemple.bind(null, page)
    await page.click('[data-testid="create-track-button"]')
    await addGenre(page, 'Pop')
    await addGenre(page, 'Jazz')
    const removePopGenreSelector =
      '[data-testid="track-form"] .delete-wrap[data-genre="Pop"] [data-testid="remove-genre"]'
    await page.click(removePopGenreSelector)
    const genresList = getByTestId('form-genres-list')
    await expect(genresList).not.toContainText('#Pop')
    await expect(genresList).toContainText('#Jazz')
  })
})

async function addGenre(page: Page, genre: Genre) {
  await page.click(
    '[data-testid="track-form"] [data-testid="open-genre-select"]'
  )
  await expect(page.locator('[data-testid="genre-selector"]')).toBeVisible()
  await page.selectOption('[data-testid="genre-selector"]', genre)
  await page.click('[data-testid="track-form"] [data-testid="add-genre"]')
  const genresList = page.locator('[data-testid="form-genres-list"]')
  await expect(genresList).toContainText(`#${genre}`)
}
