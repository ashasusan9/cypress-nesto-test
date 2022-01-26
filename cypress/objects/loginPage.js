const Login = {
   
    elements: {
      app: '[id=app]',
      emailField: '[data-test-id="email"]',
      passwordField: '[data-test-id="password"]',
      loginButton:'[data-test-id="login"]',
      toastMessage: '[data-test-id="toasts_invalidPassword_title"]',
      toggleLanguage: '[data-test-id="toggle-language"]',
    },
  
    actions: {
      assertLoginSuccessful(){
        cy.get(Login.elements.emailField).type(Cypress.env("username"));
        cy.get(Login.elements.passwordField).type(Cypress.env("password"), {force: true}); 
        cy.get(Login.elements.loginButton).click(); 
        cy.location("pathname").should("include", "/application/selection");
       }, 
       
       assertInvalidLogin() {
        cy.get(Login.elements.emailField).type(Cypress.env("username"));
        cy.get(Login.elements.passwordField).type(Cypress.env("invalidPassword"), {force: true}); 
        cy.get(Login.elements.loginButton).click(); 
        cy.get(Login.elements.toastMessage).should('be.visible');
       },

       assertFrenchLoginComponent(){
        cy.get(Login.elements.toggleLanguage).click(); 
        cy.contains("Se connecter").should('exist');
       }

    },
  }
  
  module.exports = { Login }
  
