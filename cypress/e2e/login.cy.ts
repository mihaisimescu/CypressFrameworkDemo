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

  //Register a user first
  cy.visit('register.htm')
  cy.registerRandomUser().then(user =>{
        loginUser = user
    })

  //Logout after registration
  login.clickLogoutButton()

  // Go back to main page
  cy.visit('index.htm')
})

beforeEach('', () => {
})

after('', () =>{
})

describe('Register Tests', () => {

    it('Check login functionality with valid data', () => {

        cy.url().should('include', 'index.htm')

        cy.loginUser(loginUser.randomUsername, loginUser.password)

        login.getloginSuccessfullMsg()
            .should('be.visible')
            .and('have.text', 'Welcome ' + loginUser.firstName + ' ' + loginUser.lastName)

     })

})
