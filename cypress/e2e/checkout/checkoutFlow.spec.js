import { login, addItemToCart, proceedToCheckout } from '../../support/appActions';

describe('Checkout Flow - Ecommerce', () => {
  beforeEach(() => {
    cy.setCookie('EbacStoreVersion', 'V2');
    cy.visit('/');
  });

  it('Deve realizar um checkout completo com sucesso', () => {
    cy.fixture('user.json').then((user) => {
      login(user.email, user.password);
      addItemToCart();
      proceedToCheckout();
    });
  });
});
