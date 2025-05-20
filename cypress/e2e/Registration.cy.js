
// describe('REgister pratice',()=>{
// it('login pages',()=>{
//  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//  cy.get('[name="username"]').type('Admin')
//  cy.get('[name="password"]').type('admin123')
//  cy.get('[type="submit"]').click()
//  cy.xpath('//span[text()="PIM"]').click()
//  cy.wait(2000)
//  cy.xpath('//label[text()="Employment Status"]/ancestor::div[contains(@class,"oxd-form-row")]//div[contains(@class,"oxd-select-text-input")]', { timeout: 5000 })
//   .should('be.visible')
//   .click({ multiple: true })

//  cy.xpath('//div[@role="listbox"]//span[text()="Full-Time Permanent"]', { timeout: 5000 })
//       .click()
 


// })

// })

describe('Alert with OK & Cancel - Simple Verification', () => {
  beforeEach(() => {
    cy.visit('https://demo.automationtesting.in/Alerts.html');
     Cypress.on('uncaught:exception', (err, runnable) => {
  
  return false
})
    cy.contains('Alert with OK & Cancel').click();
  });

  it('Verifies OK button works', () => {
    cy.on('window:confirm', () => true); // Simulate pressing OK
    cy.get('button[onclick="confirmbox()"]').click();
    cy.get('#demo').should('have.text', 'You pressed Ok');
  });

  it('Verifies Cancel button works', () => {
    cy.on('window:confirm', () => false); // Simulate pressing Cancel
    cy.get('button[onclick="confirmbox()"]').click();
    cy.get('#demo').should('have.text', 'You Pressed Cancel');
  });
});
