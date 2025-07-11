import { faker } from '@faker-js/faker';
import { exists } from 'graceful-fs';



describe('Account Creation', () => {
  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'V2');
    cy.visit('/');
  });

  it('Deve criar uma conta com sucesso', () => {
    cy.get('[href="/Tab/Account"] > .r-g6644c').click();
    cy.get('[data-testid="signUp"] > .css-146c3p1').click();
    cy.get('[data-testid="firstName"]').type(faker.person.firstName());
    cy.get('[data-testid="lastName"]').type(faker.person.lastName());
    cy.get('[data-testid="phone"]').type(faker.phone.number('##9####-####'));
    cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]').type(faker.internet.email());
    cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]').type('teste1234')
    cy.get('[data-testid="repassword"]').type('teste1234')
    cy.get('[data-testid="create"] > .css-146c3p1').click();
    cy.get('[href="/Tab/Account"] > .r-g6644c').click();
    cy.get('.r-14lw9ot > :nth-child(5) > .css-146c3p1').click();
    cy.get('[data-testid="confirm"] > .css-146c3p1').click();
    cy.get('[data-testid="pageTitle"]').should('be.visible');
  });
});