import { Given, Then, When } from "@cucumber/cucumber";
import loginPage from "../pageObjects/loginPage";

Given('I am on the login page', async () => {
  await loginPage.open();
  await expect(browser).toHaveTitle('kasirAja');
});

When('I input email as {string} and password as {string}', async (email, password) => {
  await loginPage.emailTextBox.setValue(email);
  await loginPage.passwordTextBox.setValue(password);
});

When('I click on the login button', async () => {
  await loginPage.loginButton.click();
});

Then('I must navigate to dashboard page', async () => {
  await expect(loginPage.dashboardPageElement).toBeDisplayed();
});

Then('I must see error message {string}', async (errorMessage) => {
  await expect(loginPage.messageElement).toHaveTextContaining(errorMessage);
});

