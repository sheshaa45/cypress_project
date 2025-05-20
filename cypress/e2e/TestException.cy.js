import Testautomation from "../support/pom/getdatapom"

describe('Test execption',()=>{
    beforeEach(() => {
        // Optional: Handle uncaught exceptions globally
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    });
    it('execption',()=>{
    const logindata= new Testautomation();
    //     cy.get('.input-field').clear().type('Superturbo')
    //     cy.get('#save_btn').click()
    //     cy.get('#add_btn').click()
    //     cy.wait(5000)
    //     cy.get('#row2').should('be.visible').click().type('Turbo')
    //     cy.get('#save_btn').click({force:true})
    //     // cy.get('#remove_btn').click()
    // logindata.visit_the_page()
    // logindata.Select_the_button()
    })
    console.log(Testautomation)
})
