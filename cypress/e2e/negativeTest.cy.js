import formPage from '../pages/FormPage'
describe('Negative Scenarios', () => {

  beforeEach(() => {
    cy.visit('https://testautomationpractice.blogspot.com/')
  })

  it('Invalid Email', () => {
    cy.get('#email').type('invalid')
    cy.get('#email').should('have.value', 'invalid')
  })

  it('Empty Form Submission', () => {
    cy.contains('Submit').click()
    // Add validation if UI supports
  })

})