describe('How to fail register', () => {
    it('should fail the registration by email already used',  () => {
        cy.visit('http://localhost:8080/');

        cy.get('#register-link').click();

        cy.get('#firstname').type('USER2');
        cy.get('#lastname').type('USER2');
        cy.get('#email').type('USER@email.com');
        cy.get('#username').type('USER2');
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

        cy.contains('User with this email already exists!').should('be.visible');
    });
    it('should fail the registration by password too short', () => {
        cy.get('#register-link').click();

        cy.get('#firstname').type('USER2');
        cy.get('#lastname').type('USER2');
        cy.get('#email').type('USER2@email.com');
        cy.get('#username').type('USER2');
        cy.get('#password').type('U');
        cy.get('#password_two').type('U');
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

        cy.contains('Password length must be greater than 6!').should('be.visible');
    });

    it('should fail the registration by passwords not matching', () => {
        cy.get('#register-link').click();

        cy.get('#firstname').type('USER2');
        cy.get('#lastname').type('USER2');
        cy.get('#email').type('USER2@email.com');
        cy.get('#username').type('USER2');
        cy.get('#password').type('USER123');
        cy.get('#password_two').type('USER12');
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

        cy.contains('Passwords do not match!').should('be.visible');
    });

    it('should fail the registration by Username length', () => {
        cy.get('#register-link').click();

        cy.get('#firstname').type('USER2');
        cy.get('#lastname').type('USER2');
        cy.get('#email').type('USER2@email.com');
        cy.get('#username').type('U');
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

        cy.contains('Username must be more than 3 characters!').should('be.visible');
    });

    it('should trigger the reset button', () => {
        cy.get('#register-link').click();

        cy.get('#firstname').type('USER2');
        cy.get('#lastname').type('USER2');
        cy.get('#email').type('USER2@email.com');
        cy.get('#username').type('USER2');
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

        cy.get('#reset').click();

    });
});
