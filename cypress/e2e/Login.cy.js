describe('Login test',()=>{

    it('Login Page', ()=>{
cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.url().should('contain','AutomationPractice')
cy.title().should('contain','Practice Page')
cy.get('[value="radio1"]').check().should('to.be.visible')
cy.get('input#checkBoxOption1').check().should('to.be.visible')
 cy.get('[id="checkBoxOption1"],[id="checkBoxOption2"],[id="checkBoxOption3"]').check()
// cy.get('[input#checkBoxOption1],[input#checkBoxOption1]').check()
    cy.get('[id="autocomplete"]').type('in')
    cy.get('.ui-menu-item-wrapper').each(($suggest)=>{
     if($suggest.text().includes('India')) {
     cy.wrap($suggest).click({force:true})
     }  
    })
    })
})

// describe('Test login page',()=>{
//     it('visit website',()=>{
//    cy.visit('https://rahulshettyacademy.com/angularpractice/')
//    cy.url().should('contain','angularpractice')
//    cy.title().should('contain','ProtoCommerce')
//    cy.get('.form-control[name="name"]').should('to.be.visible').type('sheshaa')
//    cy.get('[name="email"]').type('shehyuvi@mail.com')
//    cy.get('#exampleInputPassword1').type('sheshaa45')
//    cy.get('#exampleCheck1').check()
//    cy.get('#exampleFormControlSelect1').select('Male')
//    cy.get('#inlineRadio1').check()
//    cy.get('[name="bday"]').type('1999-02-20')
//    cy.get('[type="submit"]').click()

//     })

// })