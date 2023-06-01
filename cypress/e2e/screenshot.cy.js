/// <reference types="cypress"/>

describe('Test Suite ', () => {
    it('Screenshot ', () => {
        cy.visit("https://demo.opencart.com/");
        cy.screenshot("homepage");
        cy.wait(5000);
        cy.get("img[title='Your Store']").screenshot ("logo");
        //Automatically capture screenshot & video on failure - only when ou execu
        cy.get("li:nth-child(7) a:nth-child(1)").click(); //cameras 
        cy.get("div[id='content'] h2").should ('have.text', "Tablets");
    })
  })
  
  