import LoginPage from '../../../pageObjects/LoginPage';


describe('Admin User Tests', () => {
  // Arrange
  const loginPage = new LoginPage();
  
  beforeEach(() => {
    cy.fixture('user').as('userData');
    cy.visit('/auth/login');
  });

  it('Admin user login verification', function (){
    cy.get('[id=email]').type(this.userData.email);
    cy.get('[id=password]').type(this.userData.password);
    cy.get('[data-test=login-submit]').click();
    cy.url().should('include', '/admin/dashboard');
  });

  it('Admin should be able to edit order status', function () {
    loginPage.enterUsername('testuser@gmail.com');
    loginPage.enterPassword('wrongpassword');
    loginPage.clickLogin();
    cy.get('[data-cy=error]').should('contain', 'Invalid credentials');
  });  
});