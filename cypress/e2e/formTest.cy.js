import formPage from '../pages/FormPage'
describe('Form - Happy Path', () => {

  beforeEach(() => {
    cy.visit('https://testautomationpractice.blogspot.com/')
  })

  it('Fill complete form', () => {

    cy.fixture('user').then((user) => {

      cy.fillForm(user)

      formPage.selectGender()
      formPage.selectCheckbox()
      formPage.selectCountry('India')

      formPage.enterDate('04/25/2026')

      formPage.uploadFile('cypress/fixtures/test.pdf')

      // Assertions
      cy.get('#name').should('have.value', user.name)
      cy.get('#country').should('have.value', 'india')

    })
  })
})