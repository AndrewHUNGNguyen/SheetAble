describe('Sidebar Menu', () => {
  const validUN = 'admin@admin.com'
  const validPW = 'sheetable'

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.contains('Login')
    cy.get('input[name="email"]').click().type(validUN).should('have.value', validUN)
    cy.get('input[name="password"]').click().type(validPW).should('have.value', validPW)
    cy.get('[value="Login"]').click()
  })

  it('Verifies All buttons exist', () => {
    cy.get('i[data-cy="sidebar-expand-btn"]')
    cy.get('a[data-cy="Home"]').contains('Home')
    cy.get('a[data-cy="Sheets"]').contains('Sheets')
    cy.get('a[data-cy="Composers"]').contains('Composer')
    cy.get('a[data-cy="Search"]').contains('Search')
    cy.get('p[data-cy="Upload"]').contains('Upload')
    cy.get('p[data-cy="Synchronize"]').contains('Synchronize')
    cy.get('a[data-cy="Settings"]').contains('Settings')
    cy.get('i[data-cy="logout-button"]')
    cy.get('span[data-cy="account-email-text"]').contains('Account Email:')
    cy.get('span[data-cy="profile-email"]').contains(validUN)
  })
  
  it('Verifies clicking Home Button behavior', () => {
    cy.get('a[data-cy="Home"]').click()
    cy.url().should('eq', 'http://localhost:3000/');
  })

  it('Verifies clicking Sheets Button behavior', () => {
    cy.get('a[data-cy="Sheets"]').click()
    cy.url().should('eq', 'http://localhost:3000/sheets');
  })

  it('Verifies clicking Composers Button behavior', () => {
    cy.get('a[data-cy="Composers"]').click()
    cy.url().should('eq', 'http://localhost:3000/composers');
  })

  it('Verifies clicking Search Button behavior', () => {
    cy.get('a[data-cy="Search"]').click()
    cy.url().should('eq', 'http://localhost:3000/search');
  })

  it('Verifies clicking Upload Button behavior', () => {
    cy.get('p[data-cy="Upload"]').click()
    cy.url().should('eq', 'http://localhost:3000/');
  })

  it('Verifies the existence and the ability to click on the Synchronize button', () => {
    cy.get('p[data-cy="Synchronize"]').click()
    cy.url().should('eq', 'http://localhost:3000/');
  })

  it('Verifies the existence and the ability to click on the Settings button', () => {
    cy.get('[data-cy="Settings"]').click()
    cy.url().should('eq', 'http://localhost:3000/settings');
  })

  it('Verifies the existence and the ability to click on the Logout button', () => {
    cy.get('[data-cy="logout-button"]').click()
    cy.url().should('eq', 'http://localhost:3000/login');
  })
})