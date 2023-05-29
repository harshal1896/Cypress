/// <reference types="cypress"/>

describe('Cypress Commands', () => {
    it('Login', () => {
      cy.login('admin@yourstore.com','admin')
      cy.title()
    })

    it('Adding Cust', () => {
        cy.login('admin@yourstore.com','admin')
        cy.log("Adding Customer")
      })
      it('Edit Customer', () => {
        cy.login('admin@yourstore.com','admin')
        cy.log('Edit Customer')
      })
      
      it('Delete Customer', () => {
        cy.login('admin@yourstore.com','admin')
        cy.log('Delete Customer')
      })
  })
  
  