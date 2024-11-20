class cartView {
   
    clickcartView() {
        
        // Verificación pagina carrito y salida
        cy.url().should('eq', 'https://www.saucedemo.com/v1/cart.html');
        cy.contains('.subheader', 'Your Cart')



        //Continuar comprando
        //cy.get('[class="btn_secondary"]').contains('Continue Shopping').click();
        //cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');            
    }
     
  }
  
  export default new cartView();