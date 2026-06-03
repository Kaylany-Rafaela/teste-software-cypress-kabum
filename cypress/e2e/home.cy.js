describe('CT01 - Página Inicial', () => {

  it('Deve carregar a página inicial da KaBuM', () => {

    cy.visit('https://www.kabum.com.br')

    cy.get('body')
      .should('be.visible')

    cy.title()
      .should('not.be.empty')

  })

})