describe('05 - Responsividade', () => {

  it('Deve exibir corretamente a página em Desktop', () => {

    cy.viewport(1920, 1080)

    cy.abrirKabum()

    cy.get('[data-testid="searchbar-search-input"]')
      .should('be.visible')

    cy.screenshot('05-desktop')

  })

  it('Deve exibir corretamente a página em Tablet', () => {

    cy.viewport(768, 1024)

    cy.abrirKabum()

    cy.get('[data-testid="searchbar-search-input"]')
      .should('be.visible')

    cy.screenshot('05-tablet')

  })

  it('Deve exibir corretamente a página em Smartphone', () => {

    cy.viewport('iphone-x')

    cy.abrirKabum()

    cy.get('[data-testid="searchbar-search-input"]')
      .should('be.visible')

    cy.screenshot('05-mobile')

  })

})