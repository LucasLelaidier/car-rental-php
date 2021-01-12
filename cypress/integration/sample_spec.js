describe('Navigation test', () => {
    it('Go to login page', () => {
        cy.visit('http://localhost:8080/');

        cy.get('#signin-link').click();
        cy.url().should('include', '/signin')
    })
})