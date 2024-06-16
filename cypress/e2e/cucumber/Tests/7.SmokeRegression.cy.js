///<reference types = "cypress"/>

import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"

// Google Page
Given('I visit to google page',()=>{
    cy.visit('https://www.google.com/')
})

When('I see the {string} in title',(title)=>{
    cy.title().should('contain',title)
})

Then('I see the {string} in url',(url)=>{
    cy.url().should('contain',url)
})

// Lambda Test Page

Given('First visit the lambda test website',()=>{
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
})
When('Enter login details {word} and {word}',(userE1,passw1)=>{
    cy.loginLamTes(userE1,passw1)
})
// And('Click on lambda test login button',()=>{
//     cy.get('[value="Login"]').click()
// })
Then('url should content {string}',(url1)=>{
    cy.url().should('contain',url1)
})