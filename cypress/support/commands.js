Cypress.Commands.add('abrirKabum', () => {

  cy.visit('/')

  cy.document().its('readyState').should('eq', 'complete')

  cy.wait(4000)

  cy.get('body').then(($body) => {

    // Remove possíveis overlays
    $body.find('.adopt-c-bllPGs').remove()
    $body.find('.adopt-c-Popup').remove()
    $body.find('.adopt-c-modal').remove()
    $body.find('.modal').remove()
    $body.find('.overlay').remove()

  })

})