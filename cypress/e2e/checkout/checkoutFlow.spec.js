import { login, addItemToCart, proceedToCheckout } from '../../support/appActions';

describe('Checkout Flow - Ecommerce', () => {
  beforeEach(() => {
    cy.setCookie('EbacStoreVersion', 'V2');
    cy.visit('/');
  });

  it('Deve realizar um checkout completo com sucesso', () => {
    login('nateqa1708@ebac.com.br', 'test1234'); 
    addItemToCart('Tênis Esportivo');
    proceedToCheckout();

    cy.contains('Please choose your payment method').should('be.visible');
  });
});
