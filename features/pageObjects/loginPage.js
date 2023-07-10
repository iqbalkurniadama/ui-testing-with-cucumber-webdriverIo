const BasePage = require('./basePage');

class LoginPage extends BasePage {
  get emailTextBox() {
    return $("//input[@id='email']");
  }

  get passwordTextBox() {
    return $("//input[@id='password']");
  }

  get loginButton() {
    return $("//button[normalize-space()='login']");
  }

  get dashboardPageElement() {
    return $("//h3[normalize-space()='kasirAja']");
  }

  // for negative test email and password wrong
  get messageElement() {
    return $("//div[@role='alert']");
  }

  open() {
    super.open('https://kasirdemo.belajarqa.com');
  }
}

module.exports = new LoginPage();
