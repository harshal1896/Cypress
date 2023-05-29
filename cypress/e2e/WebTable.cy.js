/// <reference types="cypress"/>

describe(' ', () => {
    it(' ', () => {
        cy.visit('https://tastautomationpractice.blogspot.com/')
        //1) Check Value presence anywhere in the table
         cy.get('table[name=BookTable]').contains('td', 'Learn Selenium').should('be.visible')
        //2) Check Value presence in specific row & column 
        cy.get('table[name-BookTable] > tbody> trinth-child(2) > tdinth-child(3)').contains('Selenium').should('be.be.visible')
    })
  })
  
  