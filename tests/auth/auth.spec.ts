import { test, expect } from '@playwright/test';

test('Register User', async ({ page }) => {

  //Navigate to url
  await page.goto('https://automationexercise.com/');

  //Verify that home page is visible successfully
  await expect(page.locator('section[id=\'slider\']')).toBeVisible();

  //Click on 'Signup / Login' button
  await page.locator('a[href=\'/login\']').click();

  //Verify 'New User Signup!' is visible
  await expect(page.getByText('New User Signup!')).toBeVisible();

  // Enter name and email address
  /*Formas de enviar datos:
    Generar datos dinámicos (Usado en este ejemplo)
    Usar librerías para generar datos (Faker)
    Variables de entorno (Útil para ambientes Pruebas/UAT/Prod)
    Usar factory
    Enviar datos por archivo CSV
  */

  const timestamp = Date.now();

  const name = `Nelson_${timestamp}`;
  const email = `nelson_${timestamp}@test.com`;

  await page.locator('input[data-qa=\'signup-name\']').fill(name);

  await page.locator('input[data-qa=\'signup-email\']').fill(email);

  await page.pause()
  
});