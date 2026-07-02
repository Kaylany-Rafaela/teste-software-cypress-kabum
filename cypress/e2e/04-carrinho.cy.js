describe('04 - Carrinho de Compras', () => {

  beforeEach(() => {
    cy.abrirKabum()
  })

  it('Deve adicionar um produto ao carrinho', () => {

    // Pesquisa um notebook
    cy.get('[data-testid="searchbar-search-input"]', { timeout: 30000 })
      .should('be.visible')
      .clear()
      .type('Notebook{enter}')

    // Aguarda carregar os resultados
    cy.url({ timeout: 30000 }).should('include', '/busca')

    // Abre o primeiro produto
    cy.get('a[href*="/produto/"]', { timeout: 30000 })
      .first()
      .click()

    // Aguarda abrir a página do produto
    cy.url({ timeout: 30000 }).should('include', '/produto/')

    // Clica em Adicionar ao carrinho
    cy.contains('button', 'Adicionar ao carrinho', { timeout: 30000 })
      .should('be.visible')
      .click()

    // Valida a mensagem de sucesso
    cy.contains('adicionado ao carrinho', {
      timeout: 30000,
      matchCase: false
    }).should('be.visible')

    // Screenshot
    cy.screenshot('04-produto-adicionado')

  })

})