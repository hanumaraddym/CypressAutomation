class FormPage {

  elements = {
    name: '#name',
    email: '#email',
    phone: '#phone',
    genderMale: '#male',
    sunday: '#sunday',
    country: '#country',
    datePicker: '#datepicker',
    fileUpload: '#singleFileInput'
  }

  enterName(name) {
    cy.get(this.elements.name).type(name)
  }

  enterEmail(email) {
    cy.get(this.elements.email).type(email)
  }

  enterPhone(phone) {
    cy.get(this.elements.phone).type(phone)
  }

  selectGender() {
    cy.get(this.elements.genderMale).check()
  }

  selectCheckbox() {
    cy.get(this.elements.sunday).check()
  }

  selectCountry(country) {
    cy.get(this.elements.country).select(country)
  }

  enterDate(date) {
    cy.get(this.elements.datePicker)
      .scrollIntoView()
      .type(date)
  }

  uploadFile(file) {
    cy.get(this.elements.fileUpload).selectFile(file)
  }
}

export default new FormPage()