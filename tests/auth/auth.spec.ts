import { test, expect } from '@playwright/test';
import { generateUser } from '../../factories/userFactory';


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
    Generar datos dinámicos 
    Usar librerías para generar datos (Faker)
    Variables de entorno (Útil para ambientes Pruebas/UAT/Prod)
    Usar factory (Usado en este ejemplo)
    Enviar datos por archivo CSV
  */

  const user = generateUser();

  await page.locator('input[data-qa=\'signup-name\']').fill(user.name);

  await page.locator('input[data-qa=\'signup-email\']').fill(user.email);

  await page.pause()
  
});