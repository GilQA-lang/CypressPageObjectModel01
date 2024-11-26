// cypress/e2e/pages/LoginPage.js
// Mejorado Clase final

  /*class LoginPage {
    visit() {
      cy.visit('https://www.saucedemo.com/v1/index.html');
    }
  
    fillLoginForm(username, password) {
      cy.get('#user-name').type(username);
      cy.get('#password').type(password);
      cy.get('#login-button').click();
    }
  
    validateLoginSuccess() {
      cy.url().should('include', '/inventory.html');
      cy.get('.app_logo').should('be.visible');
    }
  
    validateLoginFailure() {
      cy.get('.error-message-container').should('be.visible');
    }
  }
  
  export default LoginPage();*/
  


  //Old Login 
  class LoginPage {
    // Selectores
    usernameField = '#user-name';
    passwordField = '#password';
    loginButton = '.btn_action';
  
    // Métodos de interacción
    visit() {
      cy.visit('https://www.saucedemo.com/v1/index.html');
    }
  
    enterUsername(username) {
      cy.get(this.usernameField).type(username);
    }
  
    enterPassword(password) {
      cy.get(this.passwordField).type(password);
    }
  
    clickLogin() {
      cy.get(this.loginButton).click();
    }
    
    // Método para el flujo completo de login
    login(username, password) {
      this.enterUsername(username);
      this.enterPassword(password);
      this.clickLogin();
    }
  }
  
  export default new LoginPage();
  