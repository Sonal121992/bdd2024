// 1st write payload file
// 2nd page file
// 3rd feature file
// 4th cy.js file

// payload me jada example data ke liye array of object lete hai
// currentUser naam ka varaible .....ye koi bhi bhi varaible le sakte hai
// index ko increase karne ki jarurat nai wo apne aap iterate hoga.....aage badhega

// Pahele wo given keyword check karega then ......string check karega.....jaha match hua wo execute karega

// my account me jakar logount
// then ya and add 

///<reference types = "cypress"/>

import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import page from "../../Pages/9.ContactUsPageFixFea"
import userData from "../../../../fixtures/9.ContactUsPayload"

let pg = new page
let currentUser;

Given('Navigate to contact us page {word}',(index)=>{
    currentUser = userData[index]
    pg.visitUrl()
})

When('Enter user details',()=>{
    pg.userDataFill(currentUser)
})

And('Click on submit button',()=>{
    pg.buttnClk(pg.selector.submitBtn)
})

Then('Verify the validation',()=>{
    pg.validateTxt(pg.selector.validationMsg,'Thank You for your Message!')
})