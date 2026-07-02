describe('02 - Pesquisa de Produtos', () => {

  beforeEach(() => {
    cy.abrirKabum()
  })

  it('Deve pesquisar um notebook com sucesso', () => {

    cy.get('[data-testid="searchbar-search-input"]', { timeout: 30000 })
      .should('be.visible')
      .clear()
      .type('Notebook{enter}')

    cy.url({ timeout: 30000 }).should('include', '/busca')

    cy.contains('Notebook', { matchCase: false, timeout: 30000 })
      .should('exist')

    cy.screenshot('02-pesquisa-notebook')

  })

  it('Deve pesquisar um monitor com sucesso', () => {

    cy.get('[data-testid="searchbar-search-input"]')
      .clear()
      .type('Monitor{enter}')

    cy.url().should('include', '/busca')

    cy.contains('Monitor', { matchCase: false })
      .should('exist')

  })

  it('Deve pesquisar um SSD com sucesso', () => {

    cy.get('[data-testid="searchbar-search-input"]')
      .clear()
      .type('SSD{enter}')

    cy.url().should('include', '/busca')

    cy.contains('SSD', { matchCase: false })
      .should('exist')

  })

})