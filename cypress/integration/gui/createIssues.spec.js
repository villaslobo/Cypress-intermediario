/// <reference types="Cypress" />

const faker = require('faker')

describe('Criando Issues', () => { 
    const issue = {
        title: `issue-${faker.random.uuid()}`,
        description: faker.random.words(3),
        project: {
            name: `issue-${faker.random.uuid()}`,
            description: faker.random.words(5),
        }
    }

    before(() => {
        cy.login()
        cy.api_createProject(issue.project)
    })
    it('Criando issues com sucesso', () => {
        cy.gui_createIssue(issue)
        cy.get('.issue-details')
            .should('contain',issue.title)
            .and('contain', issue.description)
    })
})