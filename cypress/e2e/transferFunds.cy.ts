import { Admin } from "../pageObjects/admin"
import { Login } from "../pageObjects/login"
import { User } from "../interfaces/user"
import { Account } from "../interfaces/account"
import { OpenNewAccount } from "../pageObjects/openNewAccount"
import { TransferFunds } from "../pageObjects/transferFunds"
import { Overview } from "../pageObjects/overview"
import { over } from "cypress/types/lodash"


const admin = new Admin()
const login = new Login()
const newAccount = new OpenNewAccount()
const transferFunds = new TransferFunds()
const overview = new Overview()

let loginUser: User
let defaultAccount: Account
let savingsAccount: Account
let newAccountId: string
let transferAmount = '100'

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
  cy.intercept('GET', '**parabank/transfer.htm').as('transfer')
})

describe('Transfer funds test', () => {

  it('Transfer funds between accounts', () => {

    cy.url().should('include', 'index.htm')

    cy.loginUser(loginUser.randomUsername, loginUser.password)

    cy.wait('@account').then(() => {
      login.getloginSuccessfullMsg()
        .should('be.visible')
        .and('have.text', 'Welcome ' + loginUser.firstName + ' ' + loginUser.lastName)


      // Store default account data
      cy.get('tbody')
        .find('tr')
        .eq(0).then(($row) => {
          defaultAccount = {
            accountId: $row.find('td').eq(0).text(),
            accountBalance: $row.find('td').eq(1).text().replace("$", ""),
            accountAvailableAmount: $row.find('td').eq(2).text()
          }

        }).then(() => {
          overview.clickOpenNewAccountLink()

          cy.wait('@openAccount').then(() => {

            //Create a savings account
            cy.openNewAccount('SAVINGS', defaultAccount.accountId)

            //Check if the new account is created
            newAccount.getNewAccountOpenedMsg()
              .should('be.visible')
              .and('have.text', 'Account Opened!')

            newAccount.getNewAccountNumber()
              .should('be.visible').then(($id) => {
                newAccountId = $id.text()
                console.log(newAccountId)
              })
          })

        }).then(() => {

          //Go to transfer funds page  
          overview.clickTransferFundsPage()

          //Enter amount to transfer and select accounts
          transferFunds.enterTransferAmount().type(transferAmount)

          cy.transferBetweenAccounts(defaultAccount.accountId, newAccountId)

          transferFunds.clickSubmitButton()

          //Check if the transfer is complete
          transferFunds.getTransferSuccessMsg()
            .should('be.visible')
            .and('have.text', 'Transfer Complete!').then(()=>{
              
              //Check if amount and accounts match
              cy.get('#amountResult').then(($element)=>{
                expect($element.text().replace('$', '').replace('.00', '')).to.equal(transferAmount)
              })

              cy.get('#fromAccountIdResult').then(($element)=>{
                expect($element.text()).to.equal(defaultAccount.accountId)
              })

              cy.get('#toAccountIdResult').then(($element)=>{
                expect($element.text()).to.equal(newAccountId)
              })


            })
        })
      })
    })
  })
