export const login = (email, password) => {
  cy.visit('/index.php?controller=authentication&back=my-account');
  cy.get('[href="/Tab/Account"] > .r-g6644c').click();
  cy.get('[data-testid="email"]').type(email);
  cy.get('[data-testid="password"]').type(password);
  cy.get('[data-testid="btnLogin"] > .css-146c3p1').click();
};

export const addItemToCart = (itemName) => {
  cy.contains(itemName).parents('.product-container').within(() => {
    cy.get('.ajax_add_to_cart_button').click();
  });

  cy.get('.button-container a[title="Proceed to checkout"]').click();
};

export const proceedToCheckout = () => {
  cy.get('.cart_navigation a[title="Proceed to checkout"]').click(); // address
  cy.get('button[name="processAddress"]').click();
  cy.get('#cgv').check();
  cy.get('button[name="processCarrier"]').click();
};
