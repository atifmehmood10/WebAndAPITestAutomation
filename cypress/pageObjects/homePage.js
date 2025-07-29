import homePageLocators from '../locators/homePageLocators';

class HomePage{

    selectProductByName(name) {
        cy.get(homePageLocators.product).contains(name).click();
    }
    
}

export default HomePage;