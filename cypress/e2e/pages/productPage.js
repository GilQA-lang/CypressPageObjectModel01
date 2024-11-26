//Página de productos
class ProductPage {
    addToCart() {
      //cy.get('.btn_inventory').first().click();  // Agrega el primer producto

      cy.contains('.inventory_item_name', 'Sauce Labs Backpack')
      cy.get('[class="btn_primary btn_inventory"]').contains('ADD TO CART').click();
      cy.get('[class="shopping_cart_container"]').click();

    }
  
   /*validateProductAdded() {
      cy.get('.shopping_cart_badge').should('have.text', '1');
    }*/
  }
  
  export default ProductPage;