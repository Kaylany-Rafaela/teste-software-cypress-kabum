describe('06 - Pesquisa de Produto Inexistente', () => {

  beforeEach(() => {
    cy.abrirKabum()
  })

  it('Deve informar que nenhum produto foi encontrado', () => {

    cy.get('[data-testid="searchbar-search-input"]')
      .should('be.visible')
      .clear()
      .type('xxxxxxxxxxxxxxxxxxxxxxxxxxxx{enter}')

    cy.url({ timeout: 30000 })
      .should('include', '/busca')

    cy.get('body', { timeout: 30000 })
      .should('contain.text', 'nenhum produto encontrado')

    cy.screenshot('06-pesquisa-inexistente')

  })

})