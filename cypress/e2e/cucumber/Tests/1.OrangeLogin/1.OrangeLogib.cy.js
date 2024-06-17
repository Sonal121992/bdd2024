///<reference types ="cypress"/>

// Always add .gitignore before doing coding

// humesha cy.js file and feature file ka name same rakhna nai to error dega
// given when then and ke statement bhi copy paste karna thoda space ya capital ka bhi issue hua to error aayega
// feature file se humne given and when same he liya usse to dono scenario me given and when ka statement exactly same rakhna
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

Given('Navigate to Orange HRM login webpage valid',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})
//for valid user
And('Enter username and password',()=>{
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
})
When('Click on login button',()=>{
    cy.get('button[type="submit"]').click()
})
Then('Valid user should be logged in',()=>{
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')
})

// for invalid user
And('Enter invalid username and password',()=>{
    cy.get('input[name="username"]').type('addmin')
    cy.get('input[name="password"]').type('admin1')
})

Then('It should display Invalid credentials message',()=>{
    cy.get('.oxd-alert-content-text').should('have.text','Invalid credentials')
})