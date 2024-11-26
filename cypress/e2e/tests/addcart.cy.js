//New
//import ProductPage from '../pages/productPage';
//import CartPage from '../pages/cartPage';

//describe('Add to Cart Tests', () => {
 // const productPage = new ProductPage();
  //const cartPage = new CartPage();

  /*beforeEach(() => {
    // Inicia sesión antes de cada prueba
    cy.visit('https://www.saucedemo.com/v1/index.html');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  });

  it('Debería agregar un producto al carrito', () => {
    productPage.addToCart();
    //productPage.validateProductAdded();
  });

 /* it('Debería permitir ir al carrito y proceder al checkout', () => {
    cartPage.goToCheckout();
    cartPage.validateCartPage();
  });*/
//});




//Old Prueba
//Agregar un elemento al carrito de compras usando Page Object Model
import InventarioPage from '../pages/InventarioPage';
import LoginPage from '../pages/loginPage';
import cartPage from '../pages/cartPage';
import cartView from '../pages/cartView';

describe('Prueba de Login usando POM', () => {
    beforeEach(function () {
        // Carga el fixture de datos de usuario
        cy.fixture('usuarios').as('usuariosData');
    }); 

    it('Login con usuario estándar', function () {
        // Visita la página de login
        LoginPage.visit();

        // Usa datos del fixture para hacer login
        const usuario = this.usuariosData.usuario1;
        LoginPage.login(usuario.username, usuario.password)

       /*  LoginPage.enterUsername('standard_user');
        LoginPage.enterPassword('secret_sauce');
        LoginPage.clickLogin(); */

        // Verificación de la URL después del login
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');

        
        cartPage.clickAddcart();
        //Verifrico página de inventario
        //cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
        
        
        // Logout
        //InventarioPage.openMenu(); 
        //InventarioPage.clickLogout(); 

                    
        //cartView.clickcartView();

        //cartCheckout.clickcartCheckout();

        checkoutPage.clickcheckoutPage();

        //checkoutFinishPage.clickcheckoutFinishPage()

                       
        
        //InventarioPage.logout();

        // Verificación de que el logout fue exitoso (regreso a la página de login)
        //cy.url().should('eq', 'https://www.saucedemo.com/v1/index.html');

   });



});