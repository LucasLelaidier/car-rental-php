describe('How to register', () => {
    it('should register correctly',  () => {
        cy.visit('http://localhost:8080/');

        cy.get('#register-link').click();

        cy.get('#firstname').type('TEST');
        cy.get('#lastname').type('TEST');
        cy.get('#email').type('TEST@email.com');
        cy.get('#username').type('TEST');
        cy.get('#password').type('TEST123');
        cy.get('#password_two').type('TEST123');
        cy.get('#street').type('TEST');
        cy.get('#city').type('TEST');
        cy.get('#state').type('TEST');
        cy.get('#country').type('TEST');
        cy.get('#zip').type('TEST');
        cy.get('#phone').type('TEST');
        cy.get('#genderF').click();
        cy.get('#genderM').click();
        cy.get('#genderU').click();

        cy.get('#submit').click();

        cy.contains('Successfully registered!').should ('be.visible');
    });
})
