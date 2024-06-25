export default class MyLTPage {
    selector = {
        url : 'https://ecommerce-playground.lambdatest.io/index.php?route=account/login',
        contiBttn : 'a[class="btn btn-primary"]',
        firstName : 'input[name="firstname"]',
        lastName : '[id="input-lastname"]', //always use id css selector first instead of using other css selector
        email : '[id="input-email"]',
        phoneNum : '[id="input-telephone"]',
        password : '[id="input-password"]',
        ConPassword : '[id="input-confirm"]',
        NewsLetter : '[id="input-newsletter-no"]',
        AgreeCheckBox : '[id="input-agree"]',
        contiBttn2 : '[value="Continue"]',
        validationTxt : '[class="page-title my-3"]'
    }

    visiturl(){
        cy.visit(this.selector.url)
    }

    btnClick(css){
        cy.get(css).click()
    }

    newUserRegister(userData){
        cy.get(this.selector.firstName).type(userData.fn)
        cy.get(this.selector.lastName).type(userData.ln)
        cy.get(this.selector.email).type(userData.eml)
        cy.get(this.selector.phoneNum).type(userData.ph)
        cy.get(this.selector.password).type(userData.passwrd)
        cy.get(this.selector.ConPassword).type(userData.passwrd)
        cy.get(this.selector.AgreeCheckBox).click({force:true})
        cy.get(this.selector.contiBttn2).click()
    }

    validateText(css, text){
        cy.get(css).should('have.text',text)
    }
}