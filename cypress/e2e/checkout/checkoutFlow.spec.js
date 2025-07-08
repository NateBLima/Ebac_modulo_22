import { faker } from '@faker-js/faker';
import { login, addItemToCart, proceedToCheckout } from '../../support/appActions';

describe('Checkout Flow - Dados Dinâmicos', () => {
  const email = faker.internet.email();
  const senha = 'Teste@123';

  beforeEach(() => {
    cy.setCookie('EbacStoreVersion', 'V2');
    cy.visit('/');
  });

  it('Deve completar um pedido com sucesso', () => {
    login(email, senha);
    addItemToCart();
    proceedToCheckout();
  });
});