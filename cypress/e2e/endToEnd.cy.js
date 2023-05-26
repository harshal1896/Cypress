/// <reference types="cypress"/>

describe('locator', function () {
    it('', function () {

        cy.visit('https://demo.nopcommerce.com/')

        cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch") // Search box

        cy.get("[type='submit']").click() //click on Search button

        cy.get("[value='Add to cart']").click()
        
        cy.get("addtocart_4_EnteredQuantity").clear().type('2') // Quantity cy.wait(3000)
        
        cy.get("Badd-to-cart-button-4").click() // Add to cart button after providing quantity
        
        cy.wait(5000)
        
        cy.get("etopcartlink>a> span.cart-label").click() // Shopping cart link cy.wait(3000)
        

    }
    )
}
)