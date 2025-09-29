import { faker } from '@faker-js/faker';
import { AccountPage } from '../../pages/accountPage';

const accountPage = new AccountPage();

describe('Criação de Conta - Ecommerce', () => {
  beforeEach(() => {
    cy.setCookie('EbacStoreVersion', 'V2');
    accountPage.visit();
  });

  it('Deve criar uma conta com sucesso', () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = `${firstName}.${lastName}.${Date.now()}@ebac.com.br`.toLowerCase();
    const password = faker.internet.password(10);
    const mobile = faker.phone.number('55###########');

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
