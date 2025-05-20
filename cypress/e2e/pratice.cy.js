describe('test login form', () =>{
    
      it('Test url and title', ()=>{
        cy.visit('https://www.saucedemo.com/v1/')

        cy.url().should('contain','v1')
        cy.title().should('contain','Swag Labs')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
       //suggestion example
       
        cy.get('input#autocpmplete').type('in')
        cy.get('.ui-menu-item-wrapper').each(($sagar)=>{
          if($sagar.text().include('india')){
            cy.wrap($sagar).click({force:true})
          }
        })
        cy.get('[id="opentab"]').invoke('removeAttr','target').click()
       
        // alert
       
        cy.get('name').type('automation')
        cy.get('#alertbtn').click()
        cy.on('window:alert',(textvalue)=>{
          expect(textvalue).to.eq('Hello automation, ahere this pratice page and share your knowledge')
          return true; // ok button
        })

        // confirm alert
        cy.get('name').type('Trendnologies') 
        cy.get('#confirmbtn').click()
        cy.on('window:confirm',(confirmtext)=>{
          expect(confirmtxt).to.eq('hello trendnologies,Are you want to confirm')
          return false; //cancel button
        })

        // element displayed example:
        cy.get('#displayed-text').type('superturbo')
        cy.get('#hide-textbox').click()
        //cy.get('displayed-text).should('contain','superturbo')
        cy.wait(5000)
        cy.get('#show-textbox').click()

        it.only('Webtable',()=>{
          cy.get('table>tbody>tr>td:nth-child(2)').each(($data)=>{
          if($data.text().includes('TestNG')){
            cy.wrap($data).then((tabledata)=>{
              const output=tabledata.text()
              cy.log(output)
            })
          }
        })
         cy.get('#mousehover').trigger('mouseover')
         cy.wait(3000)
         cy.get('[href="#top"]').click()
         cy.wait('4000')
         cy.frameloaded('frame')
         cy.iframe('').find('[href="mentorship]').eq(0).click()
         cy.iframe('').eq(0).should('contain','BRONZE')
        })

        
})

}) 