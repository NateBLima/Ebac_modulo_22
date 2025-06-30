const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br',
    specPattern: 'cypress/e2e/**/*.spec.{js,ts}',
    supportFile: 'cypress/support/e2e.js'
  }
});
