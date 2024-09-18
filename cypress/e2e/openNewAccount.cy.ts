import { Admin } from "../pageObjects/admin"
import { Login } from "../pageObjects/login"
import { User } from "../interfaces/user"
import { Overview } from "../pageObjects/overview"
import { OpenNewAccount } from "../pageObjects/openNewAccount"

const admin = new Admin()
const login = new Login()
const newAccount = new OpenNewAccount()
const overview = new Overview()

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
    cy.registerRandomUser().then(user => {
        loginUser = user
        //Logout after registration
        login.clickLogoutButton()
    })

    // Go back to main page
    cy.visit('index.htm')

    cy.intercept('GET', '**/parabank/services_proxy/bank/customers/**').as('account')
    cy.intercept('GET', '**/parabank/openaccount.htm').as('openAccount')
})

describe('Open New Account test', () => {

    it('Open Savings Account', () => {
        cy.url().should('include', 'index.htm')

        cy.loginUser(loginUser.randomUsername, loginUser.password)

        cy.wait('@account').then(() => {
            login.getloginSuccessfullMsg()
                .should('be.visible')
                .and('have.text', 'Welcome ' + loginUser.firstName + ' ' + loginUser.lastName)
        })

        overview.clickOpenNewAccountLink()

        cy.wait('@openAccount').then(() => {

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

    it('Open Cheking Account', () => {
        cy.url().should('include', 'index.htm')

        cy.loginUser(loginUser.randomUsername, loginUser.password)

        cy.wait('@account').then(() => {
            login.getloginSuccessfullMsg()
                .should('be.visible')
                .and('have.text', 'Welcome ' + loginUser.firstName + ' ' + loginUser.lastName)
        })

        overview.clickOpenNewAccountLink()

        cy.wait('@openAccount').then(() => {

            //Create a savings account
            cy.openNewAccount('CHECKING', 0)

            //Check if the new account is created
            newAccount.getNewAccountOpenedMsg()
                .should('be.visible')
                .and('have.text', 'Account Opened!')

            newAccount.getNewAccountNumber()
                .should('be.visible')
        })

    })

})