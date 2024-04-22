describe('Settings Button and Settings Page Test', () => {
  const validUN = 'admin@admin.com'
  const validPW = 'sheetable'

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.contains('Login')
    cy.get('input[name="email"]').click().type(validUN).should('have.value', validUN)
    cy.get('input[name="password"]').click().type(validPW).should('have.value', validPW)
    cy.get('[value="Login"]').click()
  })

  it('Verifies the UI elements of the Settings page', () => {

  })

  it('Verifies the ability to add new user', () => {

  })

  it('Verifies the ability to update current user account info', () => {

  })
})