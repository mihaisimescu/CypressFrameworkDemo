import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { UpdateProfile } from "../../pageObjects/updateProfile"
import { Overview } from "../../pageObjects/overview"


const updateProfile = new UpdateProfile()
const overview = new Overview()

beforeEach('', () => {
    cy.intercept('GET', '**/parabank/services_proxy/bank/customers/**').as('account')
})

Given('I can login', () =>{
    
    cy.visit('index.htm')
    cy.loginUser('Mihai13', '1234')
    overview.clickUpdateProfile()

})

When("I will complete the profile form with {string} and {string}", (city: string, state: string) =>{

    updateProfile.getFormTitle()
        .should('be.visible').then(()=>{

            cy.wait('@account').then(()=>{

                updateProfile.getCity().clear()
                updateProfile.getCity().type(city)
    
                updateProfile.getState().clear()
                updateProfile.getState().type(state)
    
                updateProfile.clickSubmitButton()

            })

        })
 })

Then('I will see the success mesage', () =>{

    updateProfile.getSucessMsg()
        .should('be.visible')
        .and('have.text', 'Profile Updated')
})

