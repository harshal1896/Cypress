/// <reference types="cypress"/>

describe('Hooks', () => {

    before(function() {
        // executes once prior all tests in it block
        cy.log("Before hook")
     })
     after(function() {
        // executes once post all tests in it block
        cy.log("After hook")
     })
     beforeEach(function() {
        // executes prior each test within it block
        cy.log("BeforeEach hook")
     })
     afterEach(function() {
        // executes post each test within it block
        cy.log("AfterEac hook")
     })

     
    it('Login ', () => {
      cy.log("*********LOgin Test************")
    })

    it('Searching Product ', () => {
        cy.log("*********Searching Product Test************")
    })

      it('Adding Product to cart ', () => {
        cy.log("*********Adding Product to cart Test************")
      })

      it('Order placed ', () => {
        cy.log("*********Order placed  Test************")
      })
  })
  
  