///<reference types = "cypress"/>

import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import page from "../../Pages/10.LambdaTestPage"
import userData from "../../../../fixtures/10.LambdaTestPayload"

let pg = new page
let currentUser;

Given("Visit to lambda test url {word}",(index)=>{
    currentUser = userData[index]
    pg.visiturl()
})

And("Click on continue button",()=>{
    pg.btnClick(pg.selector.contiBttn)
})

When("Fill the form and click on continue button",()=>{
    pg.newUserRegister(currentUser)
})

Then("Check the new user created",()=>{
    pg.validateText(pg.selector.validationTxt,' Your Account Has Been Created!')
})