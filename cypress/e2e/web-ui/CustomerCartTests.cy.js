import LoginPage from '../../pageObjects/loginPage';
import HomePage from '../../pageObjects/homePage';
import ProductPage from '../../pageObjects/productPage';
import CheckoutPage from '../../pageObjects/checkOutPage';

describe('Customer Cart Tests', () => {

    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const productPage = new ProductPage();
    const checkOutPage = new CheckoutPage();

    beforeEach(() => {
        cy.fixture('user').as('userData');
        cy.visit('');
    });

    it('Should be able to add a product', function () {
        // Act
        homePage.selectProductByName(" Combination Pliers ");        
        // Add Product
        productPage.addProductToCart();
        cy.get('div[role=alert]').click();
        // Assert Product present in cart
        productPage.navigateToCheckout()

        cy.get('[data-test=product-title]').should('contain', 'Combination Pliers');
        cy.get('[data-test=product-quantity]').invoke('val').should('equal', '1');
        cy.get('[data-test=product-price]').should('contain', '$14.15');

        // Remove Product
        checkOutPage.removeProductFromCart('Combination Pliers');
        // Assert Product is removed from cart
        cy.get('[data-test=product-title]').should('not.exist');

    });
});