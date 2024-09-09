import { User } from "../interfaces/user"
import { Register } from "../pageObjects/register"

const register = new Register()

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

//Set Data Accesss Mode to JDBC
Cypress.Commands.add('dataAccessMode', () => {

})

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

export{}

declare global{
    namespace Cypress{
        interface Chainable{
            registerUser(): Chainable<void>
            dataAccessMode(): Chainable<void>
        }
    }
}