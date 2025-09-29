import { faker } from '@faker-js/faker';
import { AccountPage } from '../../pages/accountPage';

const accountPage = new AccountPage();

describe('Criação de Conta - Ecommerce', () => {
  beforeEach(() => {
    cy.setCookie('EbacStoreVersion', 'V2');
    accountPage.visit();
  });

  it('Deve criar uma conta com sucesso', () => {
    // Gera massa de dados a cada execução
    const email = faker.internet.email();
    const password = faker.internet.password(10); // mínimo de 10 caracteres
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const mobile = faker.phone.number('##9########');

    accountPage.fillForm({
      firstName,
      lastName,
      password,
      email,
      mobile
    });

    accountPage.submitForm();
    accountPage.profileConfirm();

    cy.contains(lastName).should('be.visible');
  });
});
