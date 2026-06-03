describe('CT02 - Busca de Produto', () => {

  it('Deve pesquisar por mouse gamer', () => {

    cy.visit('https://www.kabum.com.br')

    cy.get('#inputBusca')
      .type('mouse gamer{enter}')

    cy.url()
      .should('include', 'busca')

    cy.get('body')
      .should('contain.text', 'mouse')

  })

})

describe('CT06 - Busca Inválida', () => {

  it('Deve pesquisar um produto inexistente', () => {

    cy.visit('https://www.kabum.com.br')

    cy.get('#inputBusca')
      .type('produtoinexistente123456789{enter}')

    cy.url()
      .should('include', 'busca')

  })

})