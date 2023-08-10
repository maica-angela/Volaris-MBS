

describe("Testing", () => {



    it("Login", () => {
        const testdataa = new testData();


        cy.visit(testdataa.a, { timeout: 15000 });
        cy.viewport(1280, 720);

        cy.get('[class="col btnSearch SearchDestination"]', { timeout: 10000 })
            .scrollIntoView().click();

        cy.wait(2000);
        cy.get('[class="ng-star-inserted"]').contains('Acapulco').should('be.visible').click();
       
        cy.get('[class="btn-calendar d-none d-md-block mat-flat-button mat-button-base mat-secondary"]')
            .click();
        cy.get('[class="btn btn-large col-12 search-btn mat-flat-button mat-button-base mat-primary"]')
            .scrollIntoView().click({force: true});


    })

    class testData {
        a = 'https://web-dev3-k8s.webopsvolaris.com/';
    };


}

)


