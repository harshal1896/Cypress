/// <reference types="cypress"/>

describe('Fixtures', () => {
    before(function () {

        cy.fixture('example.json').then(function (data) {
            this.data =data

        })
    })

    it('FixturesDemoTest', function () {
cy.reload()
        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('input[name=Email]').clear().type(this.data.email) //email 
        cy.get('input[name=Password]').clear().type(this.data.pwd) //password
        cy.get('body > div.master-wrapper-page > div > div > div > div > div.page-body > div.customer-blocks > div > form > div.buttons > button').click() //Signing
    })

})