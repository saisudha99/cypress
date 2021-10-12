// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//const cypress = require("cypress")



Cypress.Commands.add('Signup', (firstname ,lastName ,email, comments) => { 

    cy.get('input[name="first_name"]').type("firstname") 
    cy.get('[name="last_name"]').type("lastName")
    cy.get('[name="email"]').type(email)
    cy.get('textarea.feedback-input').type("comments")
    cy.get('#form_buttons > input:nth-child(2)').click()
    cy.url().should('contain','thank-you')

})


Cypress.Commands.add('Login', (username ,password) =>{

    cy.get('#text').type("username")
    cy.get('#password').type("password")
    cy.get('#login-button').click()
    

})
