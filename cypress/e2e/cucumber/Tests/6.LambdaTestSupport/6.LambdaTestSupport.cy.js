///<reference types = "cypress"/>

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given('Visit lambda test web page for login',()=>{
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
})

// here in When instead of cy.get 
// we will pass cy.loginLamTes because we have defined it in support folder command.js
// we can define any varaible in call back function
When('Enter lambda test {word} and {word}',(userEm,passwo)=>{
    cy.loginLamTes(userEm,passwo)
})
// Here instead of And we will write it in command.js file in support folder
// Because we don't want to write it regularly here 
// We will write it only one time in command.js file
// like below 5 lines
// Cypress.Commands.add('loginLamTes',(userEm,passwo)=>{
//     cy.get('#input-email').type(userEm)
//     cy.get('#input-password').type(passwo)
//     cy.get('[value="Login"]').click()
// })

Then('Lambda test url content {string}',(url1)=>{
    cy.url().should('contain',url1)
})