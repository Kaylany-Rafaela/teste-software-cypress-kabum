describe('CT04 e CT05 - Carrinho de Compras', () => {

  it('Deve adicionar um produto ao carrinho e validar quantidade', () => {

    cy.visit('https://www.kabum.com.br')

    cy.get('#inputBusca')
      .type('mouse gamer{enter}')

    cy.get('a[href*="/produto/"]')
      .first()
      .click()

    cy.get('button[aria-label="Adicionar ao carrinho"]')
      .click()

    cy.contains('1')
      .should('be.visible')

  })

})