///<reference types = "cypress"/>

// Test folder and feature file name should be same inside file name dosen't matter


import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

Given("Navigate to OHRM login webpage valid",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})

//for valid user ==> Scenario TC001
And("Enter username and password",()=>{
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="username"]').type('admin123')
})

When("Click on login button", ()=>{
    cy.get('button[type="submit"]').click()
})

Then("Valid user should be logged in",()=>{
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')
})

// for invalid user ==> Scenario TC002
And("Enter invalid username and password",()=>{
    cy.get('input[name="username"]').type('ABC')
    cy.get('input[name="username"]').type('abc123')
})

Then("Login page should display Invalid credentials message",()=>{
    cy.get('.oxd-alert-content-text').should('have.text','Invalid credentials')
})

// for valid user ===> Scenario TC003
Then("Login page should display {string}",(db)=>{
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text',db)
})