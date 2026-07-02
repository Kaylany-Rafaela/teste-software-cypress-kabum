describe('01 - Página Inicial KaBuM', () => {

  beforeEach(() => {
    cy.abrirKabum()
  })

  it('Deve acessar a página inicial', () => {

    cy.url().should('include', 'kabum.com.br')

    cy.title().should('contain', 'KaBuM')

  })

  it('Deve exibir o campo de pesquisa', () => {

    cy.get('[data-testid="searchbar-search-input"]')
      .should('exist')
      .and('be.visible')

  })

})