describe('CT03 - Página de Produto', () => {

  it('Deve abrir a página de um produto', () => {

    cy.visit('https://www.kabum.com.br')

    cy.get('#inputBusca')
      .type('mouse gamer{enter}')

    cy.get('a[href*="/produto/"]')
      .first()
      .click()

    cy.url()
      .should('include', '/produto/')

  })

})