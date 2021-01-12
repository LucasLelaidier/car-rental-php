describe('How to fail register', () => {
    it('should fail the registration',  () => {
        cy.visit('http://localhost:8080/');

        cy.get('#register-link').click();

        cy.get('#firstname').type('TEST2');
        cy.get('#lastname').type('TEST2');
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

        cy.contains('User with this email already exists!').should ('be.visible');

        cy.get('#register-link').click();

        cy.get('#firstname').type('TEST2');
        cy.get('#lastname').type('TEST2');
        cy.get('#email').type('TEST2@email.com');
        cy.get('#username').type('TEST');
        cy.get('#password').type('T');
        cy.get('#password_two').type('T');
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

        cy.contains('Password length must be greater than 6!').should ('be.visible');

        cy.get('#register-link').click();

        cy.get('#firstname').type('TEST2');
        cy.get('#lastname').type('TEST2');
        cy.get('#email').type('TEST2@email.com');
        cy.get('#username').type('TEST');
        cy.get('#password').type('TEST123');
        cy.get('#password_two').type('TEST12');
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

        cy.contains('Passwords do not match!').should ('be.visible');

        cy.get('#register-link').click();

        cy.get('#firstname').type('TEST2');
        cy.get('#lastname').type('TEST2');
        cy.get('#email').type('TEST2@email.com');
        cy.get('#username').type('T');
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

        cy.contains('Username must be more than 3 characters!').should ('be.visible');

        cy.get('#register-link').click();

        cy.get('#firstname').type('TEST2');
        cy.get('#lastname').type('TEST2');
        cy.get('#email').type('TEST2@email.com');
        cy.get('#username').type('TEST2');
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

        cy.get('#reset').click();

    });
})
