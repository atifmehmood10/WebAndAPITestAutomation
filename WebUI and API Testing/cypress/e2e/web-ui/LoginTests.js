import LoginPage from '../../pageObjects/loginPage';

describe('Customer User Tests', () => {
    const loginPage = new LoginPage();

  beforeEach(() => {
    cy.fixture('user').as('userData');
    cy.visit('/auth/login');
  });

  it('Should log in successfully', function (){
    // Act
    loginPage.enterEmail(this.userData.email);
    loginPage.enterPassword(this.userData.password);
    loginPage.clickLogin();
    // Assert
    cy.url().should('include', '/account');
  });

  it('Should show error on incorrect password', function () {
    // Act
    loginPage.enterEmail(this.userData.email);
    loginPage.enterPassword("123asmnd");
    loginPage.clickLogin();
    // Assert
    cy.get('[data-test=login-error]').should('contain', 'Invalid email or password');
  });

  it('Should show validation errors on empty submit', function () {
    loginPage.clickLogin();
    cy.get('[id=email-error]').should('contain', 'Email is required');
    cy.get('[id=password-error]').should('contain', 'Password is required');
  });

});