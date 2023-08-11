

describe("Testing", () => {


    it("Domestic RT 1 PAX(Mex) Zero Fare before 72 hours", () => {
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
        cy.get('[class="mat-autocomplete-panel hybridselect mat-autocomplete-visible ng-star-inserted"]')
            .contains(' Mexico ').click();
        cy.get('[class="btn continue mat-flat-button mat-button-base btn-large mat-primary"]')
            .click({ force: true });


        cy.get('[class="mat-checkbox-label"]') //[formcontrolname = "usePrimaryCustomerName"]
            .eq(0).click({ force: true });
        cy.get('[formcontrolname="email"]').type('fairytale001@yopmail.com', { force: true });
        cy.get('[formcontrolname="verifyEmail"]').type('fairytale001@yopmail.com', { force: true });
        cy.get('[formcontrolname="phoneNumber"]').type('fairytale01@yopmail.com');
        cy.get('[id="mat-checkbox-10-input"]').click({ force: true });
        cy.get('[class="mat-checkbox-label"]')//formcontrolname="privacyNotice"
            .eq(1).click({ force: true });
        cy.get('[class="btn mat-flat-button mat-button-base btn-large mat-primary"]')
            .click({ force: true });
        cy.wait(10000);

        cy.get('[formcontrolname="cardNumber"]').type('5555444433331111');
        cy.get('[formcontrolname="cardExpMonth"]').click();
        cy.get('[class="mat-autocomplete-panel hybridselect mat-autocomplete-visible ng-star-inserted"]')
            .contains('10')
            .click({ force: true });
        cy.get('[formcontrolname="cardExpYear"]').click();
        cy.get('[class="mat-autocomplete-panel hybridselect mat-autocomplete-visible ng-star-inserted"]')
            .contains('2025')
            .click({ force: true });
        cy.get('[formcontrolname="cardCVV"]')
            .type('737');

        cy.get('[class="mat-checkbox-label"]')
            .eq(4).click();
        cy.get('[formcontrolname="street"]').type('street 123');
        cy.get('[formcontrolname="city"]').type('city');
        cy.get('[formcontrolname="zipCode"]').type('1234');
        cy.get('[class="mat-checkbox-label"]')
            .eq(7).click();

        cy.get('[class="btn btn-large pay-my-trip mat-flat-button mat-button-base mat-primary"]')
            .click();

        cy.wait(10000);

        /*  url: 'https://apigw.volaris.com/dev/api/booking',*/

        cy.get('[class="reservationDetails"]').find('[class="code"]').invoke('val').as('name')
        cy.get('@name').then((cy.log))
    })

    class testData {
        a = 'https://web-dev3-k8s.webopsvolaris.com/';
    };


}

)



