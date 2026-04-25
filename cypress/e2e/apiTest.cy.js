import formPage from '../pages/FormPage'
describe('API + UI Test', () => {

  it('Intercept API Calls', () => {

    cy.intercept('GET', '**').as('apiCall')

    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.wait('@apiCall')

    cy.get('#name').type('APIUser')
    cy.get('#name').should('have.value', 'APIUser')

  })

})