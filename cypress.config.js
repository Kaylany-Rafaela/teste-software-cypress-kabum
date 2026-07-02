const { defineConfig } = require("cypress");

module.exports = defineConfig({

  // Configurações gerais
  video: true,
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: false,

  // Tempo de espera
  defaultCommandTimeout: 15000,
  pageLoadTimeout: 120000,
  requestTimeout: 30000,
  responseTimeout: 30000,

  // Tamanho da tela
  viewportWidth: 1920,
  viewportHeight: 1080,

  // Configuração dos testes E2E
  e2e: {
    baseUrl: "https://www.kabum.com.br",

    setupNodeEvents(on, config) {
      return config;
    },

    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",

    supportFile: "cypress/support/e2e.js",
  },

});