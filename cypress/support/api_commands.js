/// <reference types="Cypress" />

const accesToken = Cypress.env('gitlab_access_token')

Cypress.Commands.add('api_createProject', project =>{
    cy.request({
        method: 'POST',
        url: `api/v4/projects/?private_token=${accesToken}`,
        body: {
            name: project.name,
            description: project.description,
            initicialize_with_readme: true
        }
    })

})

Cypress.Commands.add('api_createIssue', issue =>{
    cy.api_createProject(issue.project)
    .then(response =>{
        cy.request({
            method: 'POST',
            url: `api/v4/projects/${response.body.id}/issues?private_token=${accesToken}`,
            body: {
                title: issue.title,
                description: issue.description
            }
        })
    })

})

Cypress.Commands.add('api_createLabel', (projectId, label) => {
    cy.request({
      method: 'POST',
      url: `/api/v4/projects/${projectId}/labels?private_token=${accesToken}`,
      body: {
        name: label.name,
        color: label.color
      }
    })
  })
  
  Cypress.Commands.add('api_createMilestone', (projectId, milestone) => {
    cy.request({
      method: 'POST',
      url: `/api/v4/projects/${projectId}/milestones?private_token=${accesToken}`,
      body: { title: milestone.title }
    })
  })
  