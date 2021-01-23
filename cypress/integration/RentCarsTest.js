describe('How to rent a car', () => {
    it('should rent a Ford Mustang',  () => {
        cy.visit('http://localhost:8080/');

        cy.get('#signin-link').click();
        cy.get('#username').type('USER');
        cy.get('#password').type('USER123');
        cy.get('#submit').click();

        cy.get('#home-link').click();
        cy.contains('Hello, USER').should('be.visible');


        cy.get('#1').click();

        cy.contains('Ford Mustang').should('be.visible');
        cy.contains('₹ 230').should('be.visible');

        cy.get('#day').click();
        cy.contains('₹ 2000').should('be.visible');

        cy.get('#km').click();
        cy.contains('₹ 56').should('be.visible');

        cy.get('#1').click()
        cy.contains('Rent Ford Mustang').should('be.visible');

        cy.get('#val').clear().type('10');
        cy.get('#rent').should('have.value', '2300');

        cy.get('#cancel').click();
        cy.get('#rent').should('have.value', '230');

        cy.get('#rentBtn').click();
        cy.contains('Car Rented!').should('be.visible');

        cy.get('#home-link').click();
    });

    it('should rent a Chevrolet Camaro', () => {
        cy.get('#logout-link').click();

        cy.get('#signin-link').click();
        cy.get('#username').type('USER');
        cy.get('#password').type('USER123');
        cy.get('#submit').click();

        cy.get('#home-link').click();
        cy.contains('Hello, USER').should('be.visible');

        cy.get('#2').click();

        cy.contains('Chevrolet Camaro').should('be.visible');
        cy.contains('₹ 200').should('be.visible');

        cy.get('#day').click();
        cy.contains('₹ 1800').should('be.visible');

        cy.get('#km').click();
        cy.contains('₹ 60').should('be.visible');

        cy.get('#2').click()
        cy.contains('Rent Chevrolet Camaro').should('be.visible');

        cy.get('#val').clear().type('10');
        cy.get('#rent').should('have.value', '2000');

        cy.get('#cancel').click();
        cy.get('#rent').should('have.value', '200');

        cy.get('#rentBtn').click();
        cy.contains('Car Rented!').should('be.visible');

        cy.get('#home-link').click();

    });
})
