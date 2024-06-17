///<reference types = "cypress"/>

import{Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"

Given('Navigate to Orange HRM url page',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

When('Enter username and password',(datatable)=>{
    datatable.hashes().forEach(element=>{
        cy.get('input[name="username"]').type(element.username)
        cy.get('input[name="password"]').type(element.password)
    });
})

And('Click on login button',()=>{
    cy.get('.orangehrm-login-button').click()
})

Then('Validate for valid user page',()=>{
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')
})

//scenario 002
When('Enter {word} and {word}',(user,pass)=>{
    cy.get('input[name="username"]').type(user)
    cy.get('input[name="password"]').type(pass)
})

// Scenario 003
When('Enter {word} and {word}',(user1,pass1)=>{
    cy.get('input[name="username"]').type(user1)
    cy.get('input[name="password"]').type(pass1)
})

Then('Validate for valid and invalid {word}',(cred)=>{
    if(cred=='valid'){
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')
    }
    else if(cred=='invalid'){
        cy.get('.oxd-alert-content-text').should('have.text','Invalid credentials')
    }
})

// Scenario 004

When('Enter {string} and {string}',(user2,pass2)=>{
    cy.get('input[name="username"]').type(user2)
    cy.get('input[name="password"]').type(pass2)
})

Then('Validate for valid and invalid {string}',(cre)=>{
    if(cre=='valid'){
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')
    }
    else if(cre=='invalid'){
        cy.get('.oxd-alert-content-text').should('have.text','Invalid credentials')
    }
})