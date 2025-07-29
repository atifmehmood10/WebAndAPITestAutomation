class CheckoutPage{
    removeProductFromCart(toolName) {
        // cy.get(`//tr/td/span[contains(text(),"${toolName}")]//ancestor::tr//a[@class='btn btn-danger']`).click();
        // const toolName = 'Combination Pliers';
        cy.get('table tr').each(($row) => {
        if ($row.text().includes(toolName)) {
            cy.wrap($row).find('.btn.btn-danger').click();
        }
});
    }
}

export default CheckoutPage;