describe('alerts valid',()=>{
    it('Click and cancel',()=>{

      cy.visit('https://demo.automationtesting.in/Alerts.html')  
      Cypress.on('uncaught:exception', (err, runnable) => {
  
  return false
})
     cy.get('[class="btn btn-danger"]').click()
    })
})
