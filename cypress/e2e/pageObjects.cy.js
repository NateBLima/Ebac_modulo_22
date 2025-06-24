/// <reference types="cypress" />

const { email, password } = require("../fixtures/example.json")
import profilePage from '../pages/profile.page';

describe('Teste de autenticação', () => {
  
  it('Deve fazer Login com Sucesso', () => {
    cy.login(email, password)
    profilePage.customerName().should('contain', 'Lima')
  })
})