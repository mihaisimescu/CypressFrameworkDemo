import { Admin } from "../pageObjects/admin"
import { Login } from "../pageObjects/login"
import { User } from "../interfaces/user"
import { BillPay } from "../pageObjects/billPay"

const admin = new Admin()
const login = new Login()
const billPay = new BillPay()

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

  describe('Bill Pay test', () => {

     it('Succesfull bill pay', () => {

        cy.url().should('include', 'index.htm')

        cy.loginUser(loginUser.randomUsername, loginUser.password)

        login.getloginSuccessfullMsg()
            .should('be.visible')
            .and('have.text', 'Welcome ' + loginUser.firstName + ' ' + loginUser.lastName)
        
        cy.visit('overview.htm')

        billPay.clickBillPayPage()

        billPay.getFormTitle()
             .should('be.visible')
             .and('have.text', 'Bill Payment Service')

        //Fill payement form
        billPay.fillBillPayement()

        // Check if the form fields are completed
        billPay.checkIfFormFieldsAreEmpty()

        //Submit payement
        billPay.submitPayement()

        //Check if the payement was successfull
        billPay.getBillPayementSucessfullMsg()
            .should('be.visible')

     })

  })
