class cartCheckout {
   
    clickcartCheckout() {
        
        // Verificación de compra y salida del carrito de compras
        cy.get('[class="shopping_cart_container"]').click();
        cy.url().should('eq', 'https://www.saucedemo.com/v1/cart.html');
        cy.contains('.subheader', 'Your Cart');
        cy.get('[class="btn_action checkout_button"]').contains('CHECKOUT').click();
        cy.get('#first-name').type('Juan').should('have.value', 'Juan');
        cy.get('#last-name').type('Perez').should('have.value', 'Perez');
        cy.get('#postal-code').type('001').should('have.value', '001');
        cy.get('[class="btn_primary cart_button"]').contains('CONTINUE').click();
        ///Lo que debería hacer el ***checkoutFinishPage***
        cy.get('[class="btn_action cart_button"]').contains('FINISH').click();
        cy.url().should('eq', 'https://www.saucedemo.com/v1/checkout-complete.html');
        cy.contains('.complete-header', 'THANK YOU FOR YOUR ORDER')

    }
     
  }
  
  export default new cartCheckout();