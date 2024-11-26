
//New CheckoutPage
class CheckoutPage {
    
  clickCheckoutPage() {

   fillCheckoutForm(firstName, lastName, postalCode) {
      cy.get('#first-name').type(firstName);
      cy.get('#last-name').type(lastName);
      cy.get('#postal-code').type(postalCode);
      cy.get('.btn_primary').click();  // Continuar
    }
  
    validateOverviewPage() {
      cy.url().should('include', '/checkout-step-two.html');
      cy.get('.cart_list').should('be.visible');
    }

    completePurchase() {
        cy.get('.btn_action').click();  // Botón "Finish"
      }
    
      validateCompletionPage() {
        cy.url().should('include', '/checkout-complete.html');
        cy.get('.complete-header').should('be.visible');

      }
      
    }
}
    export default new CheckoutPage();