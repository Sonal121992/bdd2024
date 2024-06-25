export default class myPage {
    selector = {
        firstName : '[name="first_name"]',
        lastName : '[name="last_name"]',
        email : '[name="email"]',
        message : '[name="message"]',
        submitBtn : '[type="submit"]',
        resetBtn : '[type="reset"]',
        validationMsg : 'h1',
        IncorrectEml : 'body'
    }
    visitUrl(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    }
    buttnClk(css){
        cy.get(css).click()
    }
    userDataFill(user){
        cy.get(this.selector.firstName).type(user.fn)
        cy.get(this.selector.lastName).type(user.ln)
        cy.get(this.selector.email).type(user.eml)
        cy.get(this.selector.message).type(user.msg)  
    }
    validateTxt(css,text){
        cy.get(css).should('have.text',text)
    }
}