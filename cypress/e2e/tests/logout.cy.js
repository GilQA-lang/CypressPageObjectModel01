
//New Logout
class Logout {
    clicklogout() {
      cy.get('.bm-burger-button').click();
      cy.get('#logout_sidebar_link').click();
    //Screeshot
      cy.screenshot('screenshot-4')

    }
  
    validateLogout() {
      cy.url().should('include', '/index.html');
      cy.get('#login-button').should('be.visible');

      //Screeshot
      cy.screenshot('screenshot-5')
    }
  }
  
  export default Logout;