import { AccountPage } from '../../pages/accountPage';

const accountPage = new AccountPage();

describe('Criação de Conta - Ecommerce', () => {
  beforeEach(() => {
    cy.setCookie('EbacStoreVersion', 'V2');
    accountPage.visit();
  });

  it('Deve criar uma conta com sucesso', () => {
    const email = 'nateqa1708@ebac.com.br';

    accountPage.fillForm({
      firstName: 'Nathan',
      lastName: 'Brandão',
      password: 'test1234',
      email,
      mobile: '31999999999'
    });

    accountPage.submitForm();
    accountPage.profileConfirm();

    cy.contains('Brandão').should('be.visible');
  });
});
