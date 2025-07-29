import productPageLocators from '../locators/productPageLocators';

class ProductPage{

    // Locators
    get addToCartButton(){
        return cy.get(productPageLocators.addToCart);
    }
    get navigateToCart(){
        return cy.get(productPageLocators.navigateToCart);
    }

    // Actions
    addProductToCart(){
        this.addToCartButton.click();
    }
    navigateToCheckout(){
        this.navigateToCart.click();
    }
    
}

export default ProductPage;