describe('test login form', () =>{
    
    it('Test url and title',()=>{
        cy.fixture('testautomation.json').then((userdata)=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
cy.get('[id="username"]').type(userdata.username)
cy.get('[id="password"]').type(userdata.password)
cy.get('[id="submit"]').click()
cy.url().should('contain','logged-in-successfully')
cy.contains('Congratulations student. You successfully logged in!').should('to.be.visible')
 cy.get('div.wp-block-button').should('to.be.visible').click()
        })

        })

    })

