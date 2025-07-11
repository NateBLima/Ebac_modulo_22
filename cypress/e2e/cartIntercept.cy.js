describe('Fluxo completo: login, adicionar ao carrinho e finalizar', () => {
  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'V2');
    Cypress.on('uncaught:exception', () => false); // ignora erros da aplicação

    // Interceptações
    cy.intercept('GET', '**/getUserAddresses', {
      statusCode: 200,
      body: []
    }).as('getUserAddresses');

    cy.intercept('GET', '**/getCart?**', {
      statusCode: 200,
      body: {
        success: true,
        cart: [
          {
            product: {
              _id: 'fake123',
              name: 'Produto Teste Mockado',
              price: 99.9,
              specialPrice: 59.9,
              quantity: 1,
              description: 'Produto mockado',
              photos: ['https://via.placeholder.com/150']
            },
            quantity: 1
          }
        ]
      }
    }).as('getCart');

    cy.intercept('POST', '**/cart', {
      statusCode: 200,
      body: {
        success: true,
        message: 'Item adicionado com sucesso!'
      }
    }).as('addItem');

    cy.intercept('POST', '**/createOrder', {
      statusCode: 200,
      body: {
        success: true,
        orderId: 'pedido123',
        message: 'Pedido criado com sucesso!'
      }
    }).as('createOrder');
  });

  it('Deve logar, adicionar item, acessar carrinho e finalizar pedido', () => {
    // Login
    cy.visit('/');
    cy.get('[href="/Tab/Account"] > .r-g6644c').click();
    cy.get('[data-testid="email"]').type('nateqa1708@ebac.com.br');
    cy.get('[data-testid="password"]').type('test1234');
    cy.get('[data-testid="btnLogin"] > .css-146c3p1').click();

    // Seleciona produto e adiciona ao carrinho
    cy.get('[data-testid="home-popular-product-list"] > [style="padding-right: 10px; padding-left: 10px;"] > :nth-child(1)').click();
    cy.get('[data-testid="addToCart"] > .css-146c3p1').click();

    // Vai para o perfil (acesso ao carrinho)
    cy.get('[href="/Tab/Account"] > .r-g6644c').click();

    // Acessa o carrinho (botão aninhado)
    cy.get('[style="background-color: rgb(242, 242, 242);"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .r-1d5kdc7 > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(1) > .r-mh9cjk > .r-18u37iz > :nth-child(2) > .css-146c3p1').click();

    // Validação de produto no carrinho
    cy.contains('bag Charlotte').should('exist');
  });
});
