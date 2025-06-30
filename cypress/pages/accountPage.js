export class AccountPage {
  visit() {
  cy.visit('http://lojaebac.ebaconline.art.br/index.php?controller=authentication&back=my-account');
  cy.get('[href="/Tab/Account"] > .r-g6644c').click();
  cy.get('[data-testid="signUp"] > .css-146c3p1').click()
}

  fillForm({ firstName, lastName, mobile, email, password }) {
    cy.get('[data-testid="firstName"]').type(firstName);
    cy.get('[data-testid="lastName"]').type(lastName);
    cy.get('[data-testid="phone"]').type(mobile);
    cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]').type(email);
    cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]').type(password);
    cy.get('[data-testid="repassword"]').type(password);
   
  }

  submitForm() {
     cy.get('[data-testid="create"]').click();
  }

  profileConfirm(){
    cy.get('[href="/Tab/Account"] > .r-g6644c').click()
  }
}
