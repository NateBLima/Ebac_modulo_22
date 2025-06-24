/// <reference types="cypress" />
const {homePage} = require("../pages/home.page")
const loginPage = require("../pages/login.page")
const {email, password} = require("../fixtures/example.json")
import profilePage from '../pages/profile.page';

describe('Teste de autenticação', () => {

  beforeEach(() => {
    cy.setCookie('EbacStoreVersion', 'V2')
    cy.visit('/')
  });

  it('Deve fazer Login com Sucesso', () => {
    homePage.openMenu('Account')
    loginPage.login(email, password)
    homePage.openMenu('Account')
    profilePage.customerName().should('contain', 'Lima')
  })
})