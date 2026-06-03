describe('CT07 - Acessar Carrinho', () => {

  it('Deve acessar a página do carrinho', () => {

    cy.visit('https://www.kabum.com.br')

    cy.get('#linkCarrinhoHeaderMobile')
      .click({ force: true })

    cy.url()
      .should('include', '/carrinho')

  })

})