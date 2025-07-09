const lens = require('cypress-lens');

module.exports = (on, config) => {
  lens(on); // Aqui sim, estamos chamando corretamente a função
  return config;
};
