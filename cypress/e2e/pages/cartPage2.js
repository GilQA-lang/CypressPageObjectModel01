class cartPage2 {
   
    clickAddcart() {
        cy.contains('.inventory_item_name', 'Sauce Labs Backpack')
        cy.get('[class="btn_primary btn_inventory"]').contains('ADD TO CART').click();
    
        //cy.contains('.inventory_item_name', 'Sauce Labs Bolt T-Shirt')
        //cy.wait(100)
        //cy.get('[class="btn_primary btn_inventory"]').contains('ADD TO CART').click();
       cy.get('[class="shopping_cart_container"]').click();
    }
     
  }
  
  export default new cartPage2();