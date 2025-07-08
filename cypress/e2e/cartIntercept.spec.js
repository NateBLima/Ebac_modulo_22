
describe('Intercept API - Carrinho de compras', () => {
  beforeEach(() => {
    cy.setCookie('EbacStoreVersion', 'V2');
    cy.visit('/');
  });

  it('Deve simular adição de item no carrinho', () => {
    cy.intercept('POST', '**/cart', {
      statusCode: 201,
      body: { success: true, message: 'Produto adicionado!' }
    }).as('addToCart');

    cy.get('[data-testid="home-popular-product-list"] > [style="padding-right: 10px; padding-left: 10px;"] > :nth-child(1)').click();
    cy.get('[data-testid="addToCart"] > .css-146c3p1').click();

    cy.wait('@addToCart').its('response.statusCode').should('eq', 201);
  });

  it('Deve simular remoção de item do carrinho', () => {
    cy.intercept('DELETE', '**/cart/*', {
      statusCode: 200,
      body: { success: true, message: 'Item removido!' }
    }).as('removeFromCart');

    cy.get('[data-testid="remove-from-cart"]').click();
    cy.wait('@removeFromCart').its('response.statusCode').should('eq', 200);
  });

  it('Deve simular atualização de item no carrinho', () => {
    cy.intercept('PUT', '**/cart/*', {
      statusCode: 200,
      body: { success: true, message: 'Carrinho atualizado!' }
    }).as('updateCart');

    cy.get('[data-testid="update-cart-item"]').click();
    cy.wait('@updateCart').its('response.statusCode').should('eq', 200);
  });
});