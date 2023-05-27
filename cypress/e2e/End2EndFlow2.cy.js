/// <reference types="cypress"/>

describe('UI Element ', () => {
    it('textField and radioButton', () => {
        cy.visit("http://newtours.demoaut.com/") // Visit URL
        cy.url().should('include', 'newtours') //Verify URL should include 'newtours'
        cy.get('input[name userName]').should('be.visible').should('be.enabled').type("mercury")
        cy.get('input[name-password]').should('be.visible').should('be.enabled').type("mercury")
        cy.get('input[name-login]').should('be.visible').click() // Sign-In cy.title().should('eq', 'Find a Flight: Mercury Tours:') //Title verification
        //Radio Buttons
        cy.get('input[value-roundtrip]').should('be.visible').should('be.checked') // visibility check
        cy.get('input[value-oneway]').should('be.visible').should('not.be.checked').click() // visibil
        cy.get('[name-findFlights]').should('be.visible').click() //Continue button
        cy.title().should('eq', 'Select a Flight: Mercury Tours') //Title verification
    })
})

