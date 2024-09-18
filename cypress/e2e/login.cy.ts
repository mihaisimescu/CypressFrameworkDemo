import { Admin } from "../pageObjects/admin"
import { Login } from "../pageObjects/login"
import { User } from "../interfaces/user"


const login = new Login()
const admin = new Admin()

let loginUser: User

before('', () => {
      
  cy.visit('index.htm')
  
  //Set Data Access Mode to JDBC(Default Data Access Mode)
  admin.clickAdminPage()
  admin.getJDBCOption().check()
  admin.clickSubmitButton()


})

beforeEach('', () => {
  //Register a user first
  cy.visit('register.htm')
  cy.registerRandomUser().then(user =>{
        loginUser = user
        //Logout after registration
        login.clickLogoutButton()
    })


  // Go back to main page
  cy.visit('index.htm')
})


describe('Login test', () => {

    it('Check login functionality with valid data', () => {

        cy.url().should('include', 'index.htm')

        cy.loginUser(loginUser.randomUsername, loginUser.password)

        login.getloginSuccessfullMsg()
            .should('be.visible')
            .and('have.text', 'Welcome ' + loginUser.firstName + ' ' + loginUser.lastName)

        login.clickLogoutButton()

     })

    it('Check login functionality with invalid data ', () => {
        
        cy.visit('index.htm')

        cy.url().should('include', 'index.htm')

        cy.loginUser("Dorin", "Ionescu")

        login.getLoginErrorMsg()
            .should('be.visible')
            .and('have.text', 'The username and password could not be verified.')

    })

})
