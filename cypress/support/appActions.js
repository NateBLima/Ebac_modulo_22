export const login = (email, password) => {
  cy.visit('/');
  cy.get('[href="/Tab/Account"] > .r-g6644c').click();
  cy.get('[data-testid="email"]').type(email);
  cy.get('[data-testid="password"]').type(password);
  cy.get('[data-testid="btnLogin"]').click();
};

export const addItemToCart = () => {
  cy.get('[data-testid="home-popular-product-list"] > [style="padding-right: 10px; padding-left: 10px;"] > :nth-child(1)').click();
  cy.get('[data-testid="addToCart"] > .css-146c3p1').click();
};

/* //usado somente para primeiro registro de endereço
export const fillAddress = (faker) => {
  cy.get('[data-testid="addNewAddress"] > .r-lrvibr').click();
  cy.get(':nth-child(1) > .css-175oi2r > .css-11aywtz').type(faker.person.fullName());
  cy.get(':nth-child(2) > .css-175oi2r > .css-11aywtz').type(faker.phone.number());
  cy.get(':nth-child(3) > .css-175oi2r > .css-11aywtz').type(faker.location.streetAddress());
  cy.get(':nth-child(4) > .css-175oi2r > .css-11aywtz').type(faker.location.city());
  cy.get(':nth-child(5) > .css-175oi2r > .css-11aywtz').type(faker.location.state());
  cy.get(':nth-child(6) > .css-175oi2r > .css-11aywtz').type(faker.location.zipCode());
  cy.get('[data-testid="save"] > .css-146c3p1').click();
};
*/

export const completeCheckout = () => {
  cy.get('[data-testid="selectAddressOrContinueToPayment"] > .css-146c3p1').click();
  cy.get('[data-testid="completeCheckout"] > .css-146c3p1').click()
  cy.get('[data-testid="goBackHome"]').should('be.visible');
};