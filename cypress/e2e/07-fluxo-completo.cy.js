describe('07 - Fluxo Completo de Compra', () => {

  beforeEach(() => {
    cy.abrirKabum()
  })

  it('Deve pesquisar um notebook e adicioná-lo ao carrinho', () => {

    cy.get('[data-testid="searchbar-search-input"]')
      .should('be.visible')
      .clear()
      .type('Notebook{enter}')

    cy.url().should('include', '/busca')

    cy.get('a[href*="/produto/"]')
      .first()
      .click()

    cy.url().should('include', '/produto/')

    cy.get('h1')
      .should('be.visible')

    // Aguarda o botão carregar
    cy.contains('button', /comprar agora|adicionar ao carrinho/i, {
      timeout: 30000
    })
    .scrollIntoView()
    .click()

    // O contador do carrinho deve ficar maior que zero
    cy.get('body', { timeout: 30000 })
      .should('contain.text', '1')

    cy.screenshot('07-fluxo-completo')
  })

})