describe('How to register', () => {
    it('should register correctly',  () => {
        cy.visit('http://localhost:8080/');

        cy.get('#register-link').click();

        cy.get('#firstname').type('USER');
        cy.get('#lastname').type('USER');
        cy.get('#email').type('USER@email.com');
        cy.get('#username').type('USER');
        cy.get('#password').type('USER123');
        cy.get('#password_two').type('USER123');
        cy.get('#street').type('USER');
        cy.get('#city').type('USER');
        cy.get('#state').type('USER');
        cy.get('#country').type('USER');
        cy.get('#zip').type('USER');
        cy.get('#phone').type('USER');
        cy.get('#genderF').click();
        cy.get('#genderM').click();
        cy.get('#genderU').click();

        cy.get('#submit').click();

        cy.contains('Successfully registered!').should ('be.visible');
    });
});
