export const login = (email, password) => {
  cy.visit('/index.php?controller=authentication&back=my-account');
  cy.get('[href="/Tab/Account"] > .r-g6644c').click();
  cy.get('[data-testid="email"]').type(email);
  cy.get('[data-testid="password"]').type(password);
  cy.get('[data-testid="btnLogin"] > .css-146c3p1').click();
};

export const addItemToCart = () => {
  cy.get('[data-testid="home-popular-product-list"] > [style="padding-right: 10px; padding-left: 10px;"] > :nth-child(1)')
    .scrollIntoView()
    .click();


  cy.get('[data-testid="addToCart"] > .css-146c3p1').click();
};

export const proceedToCheckout = () => {
  /* 
  //"Adicionar novo endereço" usado apenas uma vez, para cadastrar endereço
  cy.get('[data-testid="addNewAddress"] > .r-lrvibr').click();

  // Preenche os dados do novo endereço
  cy.get(':nth-child(1) > .css-175oi2r > .css-11aywtz').type('Nathan Brandão');     
  cy.get(':nth-child(2) > .css-175oi2r > .css-11aywtz').type('31999999999');        
  cy.get(':nth-child(3) > .css-175oi2r > .css-11aywtz').type('Rua dos Testes, 123'); 
  cy.get(':nth-child(4) > .css-175oi2r > .css-11aywtz').type('Contagem');           
  cy.get(':nth-child(5) > .css-175oi2r > .css-11aywtz').type('MG');                
  cy.get(':nth-child(6) > .css-175oi2r > .css-11aywtz').type('32000000');          

  // Salva o endereço
  cy.get('[data-testid="save"] > .css-146c3p1').click();
  */

  cy.get('[data-testid="selectAddressOrContinueToPayment"] > .css-146c3p1').click();
  cy.get('[data-testid="completeCheckout"] > .css-146c3p1').click();

  cy.contains('Go Back Home').should('be.visible');
};
