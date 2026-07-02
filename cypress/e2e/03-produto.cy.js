describe('03 - Visualização de Produto', () => {

  beforeEach(() => {
    cy.abrirKabum()
  })

  it('Deve abrir o primeiro produto da pesquisa', () => {

    // Pesquisa um produto
    cy.get('[data-testid="searchbar-search-input"]', { timeout: 30000 })
      .should('be.visible')
      .clear()
      .type('Notebook{enter}')

    // Aguarda os resultados carregarem
    cy.url({ timeout: 30000 }).should('include', '/busca')

    // Clica no primeiro produto encontrado
    cy.get('a[href*="/produto/"]', { timeout: 30000 })
      .should('have.length.greaterThan', 0)
      .first()
      .click()

    // Valida que abriu uma página de produto
    cy.url({ timeout: 30000 }).should('include', '/produto/')

    // Valida que existe um título do produto
    cy.get('h1', { timeout: 30000 })
      .should('be.visible')
      .invoke('text')
      .should('not.be.empty')

    // Tira evidência
    cy.screenshot('03-produto-aberto')

  })

})