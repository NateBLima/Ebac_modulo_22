describe('Login e adição de item ao carrinho', () => {
  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'V2');

    // Intercept dos serviços necessários
    cy.intercept('GET', '**/getUserAddresses', {
      statusCode: 200,
      body: []
    }).as('getUserAddresses');

    cy.intercept('GET', '**/getCart?**', {
      statusCode: 200,
      body: {
        success: true,
        cart: []
      }
    }).as('getCart');

    cy.intercept('POST', '**/cart', {
      statusCode: 200,
      body: {
        success: true,
        message: 'Item adicionado com sucesso!'
      }
    }).as('addItem');
  });

  it('Deve logar, adicionar item ao carrinho e validar resultado', () => {
    // Acessa a página inicial
    cy.visit('/');

    // Vai para login
    cy.get('[href="/Tab/Account"] > .r-g6644c').click();

    // Preenche e faz login
    cy.get('[data-testid="email"]').type('nateqa1708@ebac.com.br');
    cy.get('[data-testid="password"]').type('test1234');
    cy.get('[data-testid="btnLogin"] > .css-146c3p1').click();

    // Seleciona produto
  cy.get('[data-testid="home-popular-product-list"] > [style="padding-right: 10px; padding-left: 10px;"] > :nth-child(1)').click();
  cy.get('[data-testid="addToCart"] > .css-146c3p1').click();
  cy.get('[data-testid="selectAddressOrContinueToPayment"] > .css-146c3p1').click();
  cy.get('[data-testid="completeCheckout"] > .css-146c3p1').click()

    // Valida item no carrinho
  cy.get('[data-testid="goBackHome"]').should('be.visible');
  });
});
