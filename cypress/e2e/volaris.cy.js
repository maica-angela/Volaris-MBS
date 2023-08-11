

describe("Testing", () => {


    it("Domestic RT 1 PAX Zero Fare before 72 hours", () => {
        const testdataa = new testData();


        cy.visit(testdataa.a, { timeout: 15000 });
        cy.viewport(1280, 720);
        cy.scrollTo('top');
        cy.get('[class="col btnSearch SearchDestination"]', { timeout: 10000 })
            .scrollIntoView().click();

        cy.wait(2000);
        cy.get('[class="ng-star-inserted"]').contains('Acapulco').should('be.visible').click();
        cy.get('[class="btn-calendar d-none d-md-block mat-flat-button mat-button-base mat-secondary"]')
            .click();
        cy.get('[class="btn btn-large col-12 search-btn mat-flat-button mat-button-base mat-primary"]')
            .scrollIntoView().click({ force: true });


        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.wait(5000);

        cy.get('[id="Flightlists"]').contains('keyboard_arrow_down').eq(0).click();
        cy.contains('Select').eq(0).click();
        cy.get('[id="Flightlists"]').contains('keyboard_arrow_down').eq(0).click();
        cy.get('[class="benefitsList ng-star-inserted uplift"]').eq(0).click({ force: true });
        cy.get('[aria-label="Close"]').click({ force: true });
        cy.get('[id="mat-checkbox-1-input"]').click({ force: true });
        cy.get('[class="icon-keyboard_next"]').click({ force: true });

        cy.wait(5000);
        cy.get('button[class="btn btn-small mat-flat-button mat-button-base mat-secondary"]')
            .click({ force: true });

        cy.get('[formcontrolname="fName"]').type('Erza');
        cy.get('[formcontrolname="lName"]').type('Scarlet');
        cy.get('[formcontrolname="dobDay"]').click({ force: true });
        cy.get('[class="mat-autocomplete-panel hybridselect mat-autocomplete-visible ng-star-inserted"]')
            .click();
        cy.get('[formcontrolname="dobMonth"]').click({ force: true });
        cy.get('[class="mat-autocomplete-panel hybridselect mat-autocomplete-visible ng-star-inserted"]')
            .click();
        cy.get('[formcontrolname="dobYear"]').click({ force: true });
        cy.contains(' 2000 ').click({ force: true });


        cy.get('[class="mat-autocomplete-trigger mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-pristine ng-invalid"]')
            .eq(0).click();
        cy.contains('[class="mat-autocomplete-panel hybridselect mat-autocomplete-visible ng-star-inserted"]')
            .click();

        cy.get('[class="btn continue mat-flat-button mat-button-base btn-large mat-primary"]')
            .click({ force: true });

        cy.get('[formcontrolname="email"]').type('fairytale01@yopmail.com', { force: true });
        cy.get('[formcontrolname="verifyEmail"]').type('fairytale01@yopmail.com', { force: true });

        cy.get('[formcontrolname="phoneNumber"]').type('fairytale01@yopmail.com');

        cy.get('[id="mat-checkbox-10-input"]').click({ force: true });
        cy.get('button[class="btn mat-flat-button mat-button-base btn-large mat-primary"]')
            .click({ force: true });


        cy.get('[formcontrolname="cardNumber"]').type('5555444433331111');

        cy.get('[formcontrolname="cardExpMonth"]').eq(9).click({ force: true });
        cy.get('[formcontrolname="cardExpYear"]').eq(7).click({ force: true });
        cy.get('[formcontrolname="cardCVV"]').type(737);

        cy.get('[id="mat-checkbox-13-input"]').type('fairytale01@yopmail.com');
        cy.get('button[class="btn btn-large pay-my-trip mat-flat-button mat-button-base mat-primary"]')
            .click({ force: true });
    })

    class testData {
        a = 'https://web-dev3-k8s.webopsvolaris.com/';
    };


}

)



