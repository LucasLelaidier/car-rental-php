describe('Navigation Bar while logged in', () => {
    it('sign in and try the rentals button',  () => {
        cy.visit('http://localhost:8080/');

        cy.get('#signin-link').click();
        cy.get('#username').type('Erwann');
        cy.get('#password').type('password');
        cy.get('#submit').click();

        cy.get('#home-link').click();

        cy.contains('Hello, Erwann').should('be.visible');

        cy.get('#rentals-link').click();

        cy.contains('You have not rented any car!').should('be.visible');

        cy.get('#profile-link').click();

        cy.contains('Erwann Piedloup').should('be.visible');
        cy.contains('Profile Info').should('be.visible');

        cy.get('#logout-link').click();
        cy.contains('You are logged out!').should('be.visible');

    });
});
