// se importa el test y expect de playwright para hacer las pruebas
import { test, expect } from "@playwright/test";

// codigo para limpiar la consola antes de cada prueba e ir a la pagina para las pruebas
test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173");
});

// se describe el grupo de pruebas
test.describe("Pruebas de la pagina", () => {

  // se describe la prueba
  // la primera prueba indica que la pagina debe tener el titulo patitoLoco
  test("should show patitoLoco as the page title", async ({ page }) => {
    await expect(page).toHaveTitle("patitoLoco");
  });

  // la segunda prueba indica que la pagina debe tener el titulo Vite + React
  // se usa el metodo getByText para buscar el texto en la pagina
  // se usa el metodo toBeVisible para verificar que el elemento sea visible
  test("should show a title -> Vite + React", async ({ page }) => {
    const titleInPage = await page.getByText("Vite + React");

    await expect(titleInPage).toBeVisible();
  });

  // la tercera prueba indica que la pagina debe tener el logo de React
  // se usa el metodo getByTestId para buscar el elemento por el atributo data-testid
  // se usa el metodo toBeVisible para verificar que el elemento sea visible
  test("should show the React logo", async ({ page }) => {
    const img = await page.getByTestId("react-logo");

    await expect(img).toBeVisible();
  });

  // la cuarta prueba indica que la pagina debe tener un boton
  // se usa el metodo getByRole para buscar el elemento por el atributo role
  // se usa el metodo toBeVisible para verificar que el elemento sea visible
  test("should show the button", async ({ page }) => {
    const button = await page.getByRole("button");

    await expect(button).toBeVisible();
  });
});
