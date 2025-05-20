class Testautomation{
    visit_the_page(){
        cy.visit('https://practicetestautomation.com/practice-test-exceptions/')
    }
    Select_the_button(){
        cy.get('#edit_btn').click()
    }

}
export default Testautomation;