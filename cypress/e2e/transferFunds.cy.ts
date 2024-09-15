import { Admin } from "../pageObjects/admin"
import { Login } from "../pageObjects/login"
import { User } from "../interfaces/user"
import { Account } from "../interfaces/account"
import { OpenNewAccount } from "../pageObjects/openNewAccount"
import { should } from "chai"

const admin = new Admin()
const login = new Login()
const newAccount = new OpenNewAccount()

let loginUser: User
let defaultAccount: Account
let savingsAccount: Account

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
        //Logout after registration
        login.clickLogoutButton()
    })

  

  // Go back to main page
  cy.visit('index.htm')
  })

  describe('Transfer funds test', () =>{

    it('Transfer funds between accounts', () =>{
        cy.url().should('include', 'index.htm')

        cy.loginUser(loginUser.randomUsername, loginUser.password)

        login.getloginSuccessfullMsg()
            .should('be.visible')
            .and('have.text', 'Welcome ' + loginUser.firstName + ' ' + loginUser.lastName)
        
        cy.visit('overview.htm')

       cy.getDefaultAccount().then(account =>{
             defaultAccount = account
       })

        //
        newAccount.clickOpenNewAccountLink()

        //Create a savings account
        cy.openNewAccount('SAVINGS', 0)

        //Check if the new account is created
        newAccount.getNewAccountOpenedMsg()
            .should('be.visible')
            .and('have.text', 'Account Opened!')

        newAccount.getNewAccountNumber()
            .should('be.visible')

    })


  })