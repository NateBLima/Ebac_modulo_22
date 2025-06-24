/// <reference types="cypress" />

const profilePage = {
  customerName: () => cy.get('[data-testid="CustomerName"]')
};

export default profilePage;
