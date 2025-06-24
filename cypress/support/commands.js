const {homePage} = require("../pages/home.page")
const loginPage = require("../pages/login.page")

Cypress.Commands.add('login', (email, password) => {
    cy.setCookie('EbacStoreVersion', 'V2')
    cy.visit('/')
    homePage.openMenu('Account')
    loginPage.login(email, password)
    homePage.openMenu('Account')
})
