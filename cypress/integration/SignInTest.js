describe('How to Sign In', () => {
    it('how to sign in ',  () => {
        cy.visit('http://localhost:8080/');

        cy.get('#signin-link').click();

        cy.get('#username').type('Erwann');
        cy.get('#password').type('password');

        cy.get('#reset').click();
        cy.get('#username').should('be.empty');
        cy.get('#password').should('be.empty');

        cy.get('#submit').click();
        cy.contains('username is required!');
        cy.contains('password is required!');

        cy.get('#username').type('Erwann');
        cy.get('#password').type('password');
        cy.get('#submit').click();


        cy.contains('You are signed in!').should('be.visible');
    });
});
