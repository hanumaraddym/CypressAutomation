import formPage from '../pages/FormPage'
describe('Table Validation', () => {

  beforeEach(() => {
    cy.visit('https://testautomationpractice.blogspot.com/')
  })

  it('Validate table data', () => {

    cy.get('table tbody tr').should('have.length.greaterThan', 0)

    cy.get('table tbody tr').each(($row) => {
      if ($row.text().includes('Japan')) {
        cy.wrap($row).should('be.visible')
      }
    })

  })

})