class checkoutFinishPage {
   
    clickcheckoutFinishPage() {
        
        // Verificación de compra y salida del carrito de compras
        cy.url().should('eq', 'https://www.saucedemo.com/v1/checkout-step-two.html');
        cy.contains('.subheader', 'Checkout: Overview');
        cy.get('[class="btn_action cart_button"]').contains('FINISH').click();
        cy.url().should('eq', 'https://www.saucedemo.com/v1/checkout-complete.html');
        cy.contains('.complete-header', 'THANK YOU FOR YOUR ORDER')
        
    

    }
     
  }
  
  export default new checkoutFinishPage();