/// <reference types="cypress"/>
import 'cypress-file-upload'
describe(' ', () => {
    it.only('Single FileUpload ', () => {
      cy.visit('https://the-internet.herokuapp.com/upload ')
      cy.get('#file-upload').attachFile('test11.txt')
      cy.get('#file-submit').click()
      cy.wait(5000)
      cy.get('#content > div > h3').should('have.text','File Uploaded!')
    })

    it(' Rename file while Uploading', () => {
        cy.visit(' ')
      })

      it(' ', () => {
        cy.visit(' ')
      })

      it(' ', () => {
        cy.visit(' ')
      })
  })
  
  