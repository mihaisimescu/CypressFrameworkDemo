import { Register } from "../pageObjects/register"
import { Admin } from "../pageObjects/admin"


const register = new Register()
const admin = new Admin()

before('', () => {
})

beforeEach('', () => {
  
  cy.visit('index.htm')
  //Set Data Access Mode to JDBC(Default Data Access Mode)
  admin.clickAdminPage()
  admin.getJDBCOption().check()

})

after('', () =>{
})

describe('Register Tests', () => {
  
  it('Check register functionality with valid data', () => {
    
    // Go to registration page
    register.clickRegisterButton()

    //Check if it's the correct page
    cy.url().should('include', 'register.htm')

    //Register user
    cy.registerUser().then( user => {

      //Check if registration was successfull
      register.getWelcomeMsg()
          .should('be.visible')
          .and('have.text', 'Your account was created successfully. You are now logged in.')
      })

  })
})

