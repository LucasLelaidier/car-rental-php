describe('Rentals behavior', () => {
    it('should show how rentals works',  () => {
        cy.visit('http://localhost:8080/');

        cy.get('#signin-link').click();
        cy.get('#username').type('USER');
        cy.get('#password').type('USER123');
        cy.get('#submit').click();

        cy.get('#home-link').click();
        cy.contains('Hello, USER').should('be.visible');

        cy.get('#rentals-link').click();

        cy.contains('rented').should('be.visible');

        cy.get('#cancel2').click();
        cy.contains('rented').should('be.visible');

        cy.get('#cancel1').click();
        cy.contains('You have not rented any car!').should('be.visible');
    });
})
