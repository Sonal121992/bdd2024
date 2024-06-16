///<reference types = "cypress"/>

import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"

Given('Visit to google page',()=>{
    cy.visit('https://www.google.com/')
})

When('See {string} in title',(title)=>{
    cy.title().should('contain',title)
})

Then('See {string} in url',(url)=>{
    cy.url().should('contain',url)
})