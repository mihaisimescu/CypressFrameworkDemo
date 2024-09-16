import { User } from "../interfaces/user"
import { Register } from "../pageObjects/register"
import { Login } from "../pageObjects/login"
import { getRandomNumber} from "../utils/helpers"
import { OpenNewAccount } from "../pageObjects/openNewAccount"
import { TransferFunds } from "../pageObjects/transferFunds"

const register = new Register()
const login = new Login()
const newAccount = new OpenNewAccount()
const transferFunds = new TransferFunds()

const user: User = {
    firstName: 'Mihai',
    lastName: 'Simescu',
    address: 'Bld. 15 Noiembrie',
    city: 'Brasov',
    state: 'Romania',
    zipCode: '7777',
    phoneNumber: '07412345',
    socialSecurityNumber: "131313",
    username: 'Mihai13',
    randomUsername: '',
    password: '1234'
  }

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Command to register user
Cypress.Commands.add('registerUser', () => {

    register.getFirstName().type(user.firstName)
    register.getLastName().type(user.lastName)
    register.getAddress().type(user.address)
    register.getCity().type(user.city)
    register.getState().type(user.state)
    register.getZipCode().type(user.zipCode)
    register.getPhone().type(user.phoneNumber)
    register.getSsn().type(user.socialSecurityNumber)
    register.getUsername().type(user.username)
    register.getPassword().type(user.password)
    register.getConfirmPassword().type(user.password)

    register.submitRegistrationForm()
})

Cypress.Commands.add('registerRandomUser', () => {

    user.randomUsername = user.username + getRandomNumber(1, 300).toString()

    register.getFirstName().type(user.firstName)
    register.getLastName().type(user.lastName)
    register.getAddress().type(user.address)
    register.getCity().type(user.city)
    register.getState().type(user.state)
    register.getZipCode().type(user.zipCode)
    register.getPhone().type(user.phoneNumber)
    register.getSsn().type(user.socialSecurityNumber)
    register.getUsername().type(user.randomUsername ) 
    register.getPassword().type(user.password)
    register.getConfirmPassword().type(user.password)

    register.submitRegistrationForm()

    cy.wrap(user)

})

Cypress.Commands.add('loginUser', (username: string, password: string) => {

    login.getUsername().type(username)
    login.getPassword().type(password)
    login.clickLoginButton()

})

Cypress.Commands.add('openNewAccount', (accountType: string, accountId: string) => {
    
    newAccount.getAccountType().select(accountType)
    newAccount.getFromAccount().select(accountId)
    newAccount.clickSubmitOpenNewAccount()

})

Cypress.Commands.add('transferBetweenAccounts', (fromAccount:string, toAccount: string) =>{

    transferFunds.getFromAccountId().select(fromAccount)
    transferFunds.getToAccountId().select(toAccount)
})

export{}

declare global{
    namespace Cypress{
        interface Chainable{
            registerUser(): Chainable<User>
            loginUser(username: string, password: string): Chainable<void>
            registerRandomUser(): Chainable<User>
            openNewAccount(accountType: string, accountId: string): Chainable<void>
            transferBetweenAccounts(fromAccount:string, toAccount: string): Chainable<void>
        }
    }
}
