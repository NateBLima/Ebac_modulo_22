import { faker } from '@faker-js/faker';

describe('Criação de Conta - Dados Dinâmicos', () => {
  beforeEach(() => {
    cy.setCookie('EbacStoreVersion', 'V2');
    cy.visit('/index.php?controller=authentication&back=my-account');
  });

  it('Deve criar uma conta com sucesso', () => {
    const nome = faker.person.fullName();
    const email = faker.internet.email();
    const senha = 'Teste@123';

    cy.get('[data-testid="create-account-tab"]').click();
    cy.get('[data-testid="name"] input').type(nome);
    cy.get('[data-testid="email"] input').type(email);
    cy.get('[data-testid="password"] input').type(senha);
    cy.get('[data-testid="btnRegister"] > .css-146c3p1').click();

    cy.contains('Welcome').should('be.visible');
  });
});
