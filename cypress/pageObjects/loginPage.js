import loginPageLocators from '../locators/loginPageLocators';

class LoginPage {
  // Locators 
  get emailField() {
    return cy.get(loginPageLocators.email);
  }

  get passwordField() {
    return cy.get(loginPageLocators.password);
  }

  get loginButton() {
    return cy.get(loginPageLocators.loginButton);
  }

  // Actions
  enterEmail(email) {
    this.emailField.type(email);
  }

  enterPassword(password) {
    this.passwordField.type(password);
  }

  clickLogin() {
    this.loginButton.click();
  }
}

export default LoginPage;