
//New CartPage
/*class CartPage {
    goToCheckout() {
      cy.get('.btn_action').click();  // Botón para proceder al checkout
    }
  
    validateCartPage() {
      cy.url().should('include', '/cart.html');
      cy.get('.cart_list').should('be.visible');
    }
  }
  
  export default CartPage;*/


//old cart Page
class cartPage {
   
    clickAddcart() {
        cy.contains('.inventory_item_name', 'Sauce Labs Backpack')
        cy.get('[class="btn_primary btn_inventory"]').contains('ADD TO CART').click();
        cy.get('[class="shopping_cart_container"]').click();

        
        //Para seguir agregando
        //cy.contains('.inventory_item_name', 'Sauce Labs Bolt T-Shirt')
        //cy.wait(100)
        //cy.get('[class="btn_primary btn_inventory"]').contains('ADD TO CART').click();
       
    }
     
  }
  
  export default new cartPage();


