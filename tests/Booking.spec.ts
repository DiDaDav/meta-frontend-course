import { test, expect } from '@playwright/test'

test.describe('Book', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/book')
  })

  test('validate booking', async ({ page }) => {
    await expect(page).toHaveTitle(/Little Lemon/)
    const inputDate = page.locator('input[name="date"]')
    const guests = page.locator('input[name="guests"]')
    const button = page.getByRole('button', { name: 'Make your reservation' })
    await inputDate.fill('2024-01-01')
    await guests.fill('1')
    expect(await inputDate.inputValue()).toBe('2024-01-01')
    expect(await guests.inputValue()).toBe('1')
    await button.click()
    expect(page).toHaveURL(/book\/confirmation/)
  })

  test('cannot validate form with errors', async ({ page }) => {
    await expect(page).toHaveTitle(/Little Lemon/)
    const inputDate = page.locator('input[name="date"]')
    const guests = page.locator('input[name="guests"]')
    const button = page.getByRole('button', { name: 'Make your reservation' })
    await inputDate.fill('')
    await guests.fill('0')
    await button.click()
    expect(page).not.toHaveURL(/book\/confirmation/)
    await inputDate.fill('2024-01-01')
    await guests.fill('11')
    await button.click()
    expect(page).not.toHaveURL(/book\/confirmation/)
  })
})
