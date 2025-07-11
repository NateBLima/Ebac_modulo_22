import { faker } from '@faker-js/faker';
import { login, addItemToCart, fillAddress, completeCheckout } from '../support/appActions';

describe('Checkout Flow', () => {
  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'V2');
    cy.visit('/');
  });

  it('Deve realizar o fluxo de compra com sucesso', () => {
    login('nateqa1708@ebac.com.br', 'test1234');
    addItemToCart();
    //fillAddress(faker);
    completeCheckout();
  });
});