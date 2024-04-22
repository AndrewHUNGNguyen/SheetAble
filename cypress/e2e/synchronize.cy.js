describe('Synchronize Side Menu Behavior', () => {
  const validUN = 'admin@admin.com'
  const validPW = 'sheetable'

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.contains('Login')
    cy.get('input[name="email"]').click().type(validUN).should('have.value', validUN)
    cy.get('input[name="password"]').click().type(validPW).should('have.value', validPW)
    cy.get('[value="Login"]').click()
  })

  it('Verifies the behavior of synchronize button', () => {

  })
})