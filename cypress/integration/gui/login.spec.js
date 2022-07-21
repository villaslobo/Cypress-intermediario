/// <reference types="Cypress" />

describe('Login',() =>{
    it('Login com sucesso', () =>{
        cy.login()

        cy.get('.qa-user-avatar').should('exist')
    })

})