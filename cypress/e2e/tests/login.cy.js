//New Login

/*import LoginPage from '../pages/loginPage';

describe('Login Tests', () => {
  const loginPage = new LoginPage();

  it('Debería permitir login con credenciales válidas', () => {
    loginPage.visit();
    loginPage.fillLoginForm('standard_user', 'secret_sauce');
    loginPage.validateLoginSuccess();
  });

  it('Debería mostrar error con credenciales inválidas', () => {
    loginPage.visit();
    loginPage.fillLoginForm('invalid_user', 'wrong_password');
    loginPage.validateLoginFailure();
  });
});*/


//Old Login

//import InventarioPage from '../pages/InventarioPage';
import LoginPage from '../pages/loginPage';
//import cartPage from '../pages/cartPage';
//import cartView from '../pages/cartView';
//import cartCheckout from '../pages/cartCheckout';
//import checkoutFinishPage from '../pages/checkoutFinishPage';*/


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

        //LoginPage.enterUsername('standard_user');
        //LoginPage.enterPassword('secret_sauce');
        //LoginPage.clickLogin(); 

        // Verificación de la URL después del login
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');

        // Logout
        //InventarioPage.openMenu(); 
        //InventarioPage.clickLogout(); 

        //cartPage.clickAddcart();
        //Verifrico página de inventario
        //cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
        
        
        //cartView.clickcartView();


        //cartCheckout.clickcartCheckout();


        //checkoutFinishPage.clickcheckoutFinishPage()
                     
        
       // InventarioPage.logout();

        // Verificación de que el logout fue exitoso (regreso a la página de login)
       //cy.url().should('eq', 'https://www.saucedemo.com/v1/index.html');


       //Screeshot
       cy.screenshot('screenshot-3')

    });



});