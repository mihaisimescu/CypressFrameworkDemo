import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { UpdateProfile } from "../../pageObjects/updateProfile"
import { Overview } from "../../pageObjects/overview"
import { Login } from "../../pageObjects/login"
import { User } from "../../interfaces/user"
import { Admin } from "../..//pageObjects/admin"


const updateProfile = new UpdateProfile()
const overview = new Overview()
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

    cy.visit('register.htm')
    cy.registerRandomUser().then(user => {
        loginUser = user
        //Logout after registration
        login.clickLogoutButton()
    })

    cy.intercept('GET', '**/parabank/services_proxy/bank/customers/**').as('account')
})

Given('I can login', () =>{
    
    cy.visit('index.htm')
    cy.loginUser(loginUser.randomUsername, loginUser.password)
    
})

When("I will complete the profile form with new city {string}, state {string} and Zip Code {string}", (city: string, state: string, zipCode: string) =>{

    overview.clickUpdateProfile()

    cy.wait('@account').then(()=>{
    
        updateProfile.getFormTitle()
            .should('be.visible').then(()=>{

                cy.wait(2000)
                //Clear fileds
                updateProfile.getCity().clear()
                updateProfile.getState().clear()
                updateProfile.getZipCode().clear()
                
                //Update requested fields
                updateProfile.getCity().type(city)
                updateProfile.getState().type(state)
                updateProfile.getZipCode().type(zipCode)
    
                updateProfile.clickSubmitButton()

            })

        })
 })

Then('I will see the success mesage', () =>{

    updateProfile.getSucessMsg()
        .should('be.visible')
        .and('have.text', 'Profile Updated')
})

