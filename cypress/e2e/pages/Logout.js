class Logout {
    logout() {
      cy.get('.bm-burger-button').click();
      cy.get('#logout_sidebar_link').click();
    }
  
    validateLogout() {
      cy.url().should('include', '/index.html');
      cy.get('#login-button').should('be.visible');
    }
  }
  
  export default Logout;