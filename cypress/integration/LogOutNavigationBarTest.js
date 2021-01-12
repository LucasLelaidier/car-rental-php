describe('Navigation bar while log out', () => {
    it('browse the navigation bar while log out', () => {
        cy.visit('http://localhost:8080/');

        cy.get('#signin-link').click();
        cy.url().should('include', '/signin')

        cy.get('#home-link').click();
        cy.get('#register-link').click();
        cy.url().should('include', '/register');

        cy.get('#home-link').click();
        cy.get('#rentals-link').click();
        cy.contains('You are logged out!').should('be.visible');


    })
})
