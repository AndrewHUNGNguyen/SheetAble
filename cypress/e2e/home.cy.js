describe('Home Page', () => {
  const validUN = 'admin@admin.com'
  const validPW = 'sheetable'

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.contains('Login')
    cy.get('input[name="email"]').click().type(validUN).should('have.value', validUN)
    cy.get('input[name="password"]').click().type(validPW).should('have.value', validPW)
    cy.get('[value="Login"]').click()
  })

  it('Verifying UI elements of Home Page with no sheets added', () => {
    cy.get('h1[data-cy="oops-heading"]').contains('Oops!')
    cy.get('h2[data-cy="begin-upload-heading"]').contains('Upload Sheets to begin')
    cy.get('p[data-cy="upload-btn"]').contains('Upload Sheet')
  })

  it('Checks if Upload Dialog box appears when clicking Upload Button on No Sheets Uploaded', () => {
    cy.get('p[data-cy="upload-btn"]').click()
    cy.get('[data-cy="upload-title"]').contains('Upload')
    cy.get('[data-cy="upload-body"]').contains('Sheet Name')
    cy.get('[data-cy="upload-body"]').contains('Composer')
    cy.get('[data-cy="upload-body"]').contains('Drag & Drop your file or Browse')
    cy.get('[data-cy=upload-btn]').should('exist').should('be.visible')
      .should('be.disabled').contains('Upload')
  })

  it('Tests uploading on Home Page with no sheets', () => {

  })
})