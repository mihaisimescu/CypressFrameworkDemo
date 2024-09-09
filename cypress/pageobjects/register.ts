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




}