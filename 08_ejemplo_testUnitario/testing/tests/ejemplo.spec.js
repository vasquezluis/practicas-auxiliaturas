import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('http://localhost:5173')
})

test.describe('Pruebas de la pagina', () => {
  
  test('should show patitoLoco as the page title', async ({page}) => {
    await expect(page).toHaveTitle('patitoLoco')
  })

  test('should show a title -> Vite + React', async ({page}) => {
    const titleInPage = await page.getByText('Vite + React')

    await expect(titleInPage).toBeVisible()

  })

  test('should show the React logo', async ({page}) => {
    const img = await page.getByTestId('react-logo')

    await expect(img).toBeVisible()
  })
})