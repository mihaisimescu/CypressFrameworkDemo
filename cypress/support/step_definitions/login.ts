import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { Login } from "../../pageObjects/login"
import { User } from "../../interfaces/user"
import { Admin } from "../..//pageObjects/admin"


const login = new Login()
const admin = new Admin()

let loginUser: User

// before('', () => {

//     cy.visit('index.htm')
//     //Set Data Access Mode to JDBC(Default Data Access Mode)
//     admin.clickAdminPage()
//     admin.getJDBCOption().check()
//     admin.clickSubmitButton()
// })

beforeEach('', () => {

    cy.visit('register.htm')
    cy.registerRandomUser().then(user => {
        loginUser = user
        //Logout after registration
        login.clickLogoutButton()
    })
})

Given("I open the login page", () => {
    cy.visit('index.htm')
})

When('I will complete the login form and submit', () =>{
    
    cy.loginUser(loginUser.randomUsername, loginUser.password)

})

Then('I am able to see the overview page', () => {

    login.getloginSuccessfullMsg()
            .should('be.visible')
            .and('have.text', 'Welcome Mihai Simescu')

    cy.url().then(url => {
        expect(url).to.contain('overview.htm');
    })
})