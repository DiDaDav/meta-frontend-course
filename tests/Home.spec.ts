import { test, expect } from '@playwright/test'

test.describe('Home', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('can go to reservation page from header', async ({ page }) => {
    await expect(page).toHaveTitle(/Little Lemon/)
    const res = page.getByRole('link', { name: 'Reservations' })
    await res.first().click()
    await expect(page).toHaveURL(/\/book/)
  })

  test('can go to reservation page from footer', async ({ page }) => {
    await expect(page).toHaveTitle(/Little Lemon/)
    const res = page.getByRole('link', { name: 'Reservations' })
    await res.last().click()
    await expect(page).toHaveURL(/\/book/)
  })
})
