describe('template spec', () => {
  it('types in user credentials on Login', () => {
    const validUN = 'admin@admin.com'
    const validPW = 'sheetable'
    cy.visit('http://localhost:3000/')
    cy.contains('Login')
    cy.get('input[name="email"]').click().type(validUN).should('have.value', validUN)
    cy.get('input[name="password"]').click().type(validPW).should('have.value', validPW)
  })

  //Move this test into another file
  it('validates Forgot PW Functionality', () => {
    cy.visit('http://localhost:3000/')
    cy.get('a[href="/forgot-password"]').click()
    cy.url('include', '/forgot-password')
    cy.contains('Forgot your password?')
    cy.get('.btn').should('have.attr', 'disabled');
    cy.get('.email-input input[type="email"]').click().type('admin@admin.com')
    cy.get('.btn').should('not.have.attr', 'disabled');
  })

  it('types in user credentials on Login', () => {
    const validUN = 'admin@admin.com'
    const validPW = 'sheetable'
    cy.visit('http://localhost:3000/')
    cy.get('input[name="email"]').click().type(validUN).should('have.value', validUN)
    cy.get('input[name="password"]').click().type(validPW).should('have.value', validPW)
  })
})