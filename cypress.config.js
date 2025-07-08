const { defineConfig } = require('cypress');
const lens = require('cypress-lens').plugin;


module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br',
    setupNodeEvents(on, config) {
      lens(on); 
    },
  },
});
