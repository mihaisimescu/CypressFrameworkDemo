export class Register {

    //Register locators fields
    registerLink = '#loginPanel > :nth-child(3) > a'
    firstName = '#customer\\.firstName'
    lastName = '#customer\\.lastName'
    address = '#customer\\.address\\.street'
    city = '#customer\\.address\\.city'
    state = '#customer\\.address\\.state'
    zipCode = '#customer\\.address\\.zipCode'
    phone = '#customer\\.phoneNumber'
    ssn = '#customer\\.ssn'
    username = '#customer\\.username'
    password = '#customer\\.password'
    confirmPassword = '#repeatedPassword'
    submitRegistration = '[colspan="2"] > .button' //input[value='Register']
    
    //Register success check
    registerSuccessfull = "#rightPanel > p"

    //Register form error messages for required fields
    errorFirstName = '#customer\\.firstName\\.errors'
    errorLastName = '#customer\\.lastName\\.errors'
    errorAddress = '#customer\\.address\\.street\\.errors'
    errorCity = '#customer\\.address\\.city\\.errors'
    errorState = '#customer\\.address\\.state\\.errors'
    errorZipCode = '#customer\\.address\\.zipCode\\.errors'
    errorSsn = '#customer\\.ssn\\.errors'
    errorUsername = '#customer\\.username\\.errors'
    errorPassword = '#customer\\.password\\.errors'
    errorConfirmPassword = '#repeatedPassword\\.errors'

    //Functions
    getFirstName(){
        return cy.get(this.firstName)
    }

    getLastName(){
        return cy.get(this.lastName)
    }
    
    getAddress(){
        return cy.get(this.address)
    }

    getCity(){
        return cy.get(this.city)
    }

    getState(){
        return cy.get(this.state)
    }

    getZipCode(){
        return cy.get(this.zipCode)
    }

    getPhone(){
        return cy.get(this.phone)
    }

    getSsn(){
        return cy.get(this.ssn)
    }

    getUsername(){
        return cy.get(this.username)
    }

    getPassword(){
        return cy.get(this.password)
    }

    getConfirmPassword(){
        return cy.get(this.confirmPassword)
    }
  
    submitRegistrationForm() {
        cy.get(this.submitRegistration).click()
        return this
    }

    clickRegisterButton(){
        cy.get(this.registerLink).click()
        return this
    }

    getWelcomeMsg(){
        return cy.get(this.registerSuccessfull)
    }

    checkMandatoryFieldsErrorMsg(){
        cy.get(this.errorFirstName)
            .should('be.visible')
        cy.get(this.errorLastName)
            .should('be.visible')
        cy.get(this.errorAddress)
            .should('be.visible')
        cy.get(this.errorCity)
            .should('be.visible')
        cy.get(this.errorState)
            .should('be.visible')
        cy.get(this.errorZipCode)
            .should('be.visible')
        cy.get(this.errorSsn)
            .should('be.visible')
        cy.get(this.errorUsername)
            .should('be.visible')
        cy.get(this.errorPassword)
            .should('be.visible')
        cy.get(this.errorConfirmPassword)
            .should('be.visible')
    }

}