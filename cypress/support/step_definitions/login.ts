import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { Login } from "../../pageObjects/login"

const login = new Login()



Given("I open the login page", () => {
    cy.visit('index.htm')
})

When('I will complete the login form and submit', () =>{
    
    cy.loginUser('Mihai13', '1234')

})

Then('I am able to see the overview page', () => {

    login.getloginSuccessfullMsg()
            .should('be.visible')
            .and('have.text', 'Welcome Mihai Simescu')

    cy.url().then(url => {
        expect(url).to.contain('overview.htm');
    })
})