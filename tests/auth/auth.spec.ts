import { test, expect } from '@playwright/test';
import { generateUser } from '../../factories/userFactory';


test("Register User", async ({ page }) => {

  //Navigate to url
  await page.goto("https://automationexercise.com/");

  //Verify that home page is visible successfully
  await expect(page.locator("#slider")).toBeVisible();

  //Click on 'Signup / Login' button
  await page.locator("a[href='/login']").click();

  //Verify 'New User Signup!' is visible
  await expect(page.getByText("New User Signup!")).toBeVisible();

  // Enter name and email address
  /*Formas de enviar datos:
    Generar datos dinámicos 
    Usar librerías para generar datos (Faker)
    Variables de entorno (Útil para ambientes Pruebas/UAT/Prod)
    Usar factory (Usado en este ejemplo)
    Enviar datos por archivo CSV
  */

  const user = generateUser();

  await page.locator("[data-qa='signup-name']").fill(user.name);

  await page.locator("[data-qa='signup-email']").fill(user.email);

  //Click 'Signup' button
  await page.locator("[data-qa='signup-button']").click();

  //Verify that 'ENTER ACCOUNT INFORMATION' is visible
  await expect(page.getByText("Enter Account Information")).toBeVisible();

  //Fill details: Title, Name, Email, Password, Date of birth
  if (user.title === "Mr") {
    await page.locator("#id_gender1").check();
  } else {
    await page.locator("#id_gender2").check();
  }

  await page.locator("#name").fill(user.name);

  await page.locator("#password").fill(user.password);

  await page.locator("#days").selectOption(user.dateOfBirth.day);

  await page.locator("#months").selectOption(user.dateOfBirth.month);

  await page.locator("#years").selectOption(user.dateOfBirth.year);

  //Select checkbox 'Sign up for our newsletter!'
  await page.locator("#newsletter").check();


  //Select checkbox 'Receive special offers from our partners!'
  await page.locator("#optin").check();

  //Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number

  await page.locator("[data-qa='first_name']").fill(user.name);

  await page.locator("[data-qa='last_name']").fill(user.lastName);

  await page.locator("[data-qa='company']").fill(user.company);

  await page.locator("[data-qa='address']").fill(user.address);

  await page.locator("[data-qa='address2']").fill(user.address2);

  await page.locator("[data-qa='country']").selectOption(user.country);
  
  await page.locator("[data-qa='state']").fill(user.state);

  await page.locator("[data-qa='city']").fill(user.city);

  await page.locator("[data-qa='zipcode']").fill(user.zipCode);

  await page.locator("[data-qa='mobile_number']").fill(user.mobile);

  //Click 'Create Account button'
  await page.locator("[data-qa='create-account']").click();

  //Verify that 'ACCOUNT CREATED!' is visible
  await expect(page.getByText("ACCOUNT CREATED!")).toBeVisible();

  //Click 'Continue' button
  await page.locator("[data-qa='continue-button']").click();

  //Verify that 'Logged in as username' is visible
  await expect(page.getByText(" Logged in as ")).toContainText(`Logged in as ${user.name}`)

  //Click 'Delete Account' button
  await page.locator("a[href='/delete_account']").click();

  //Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
  await expect(page.locator("[data-qa='account-deleted']")).toContainText("Account Deleted!")

  await page.locator("[data-qa='continue-button']").click();

});

test("Login User with correct email and password", async ({ page }) => {

  //Navigate to url 'http://automationexercise.com'
  await page.goto("http://automationexercise.com");

  // Verify that home page is visible successfully
  await expect(page.locator("#slider")).toBeVisible();

  //Click on 'Signup / Login' button
  await page.locator("a[href='/login']").click();

  //Verify 'Login to your account' is visible
  await expect(page.getByText("Login to your account")).toBeVisible();

  //Enter correct email address and password
  await page.locator("[data-qa='login-email']").fill("Nelson.dev@test.com");
  await page.locator("[data-qa='login-password']").fill("Test123*");

  //Click 'login' button
  await page.locator("[data-qa='login-button']").click();

  //Verify that 'Logged in as username' is visible
  await expect(page.getByText(" Logged in as ")).toContainText("Logged in as Nelson")

  //Click 'Logout' button
  await page.locator("a[href='/logout']").click();

  //Verify 'Login to your account' is visible
  await expect(page.getByText("Login to your account")).toBeVisible();

  await page.pause();

});