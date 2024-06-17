///<reference types = "cypress"/>

import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"

Given('Visit LambdaTest web page login', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
})
// //This is use for single data
// When('Enter lambda {word} and {word}',(userE,pass)=>{
//     cy.get('#input-email').type(userE)
//     cy.get('#input-password').type(pass)
// })

// Now will code for multiple data
When('Enter lambda {word} and {word}', (userE,passw) => {
        cy.get('#input-email').type(userE)
        cy.get('#input-password').type(passw)
})
And('Click on lambda login button', () => {
    cy.get('input[type="submit"]').click()
})
Then('url content {string}', (url) => {
    cy.url().should('contain', url)
}) 