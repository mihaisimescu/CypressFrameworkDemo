export class Register {

    //Register fields
    firstName = '#customer\.firstName'
    lastName = '#customer\.lastName'
    address = '#customer\.address\.street'
    city = '#customer\.address\.city'
    state = '#customer\.address\.state'
    zipCode = '#customer\.address\.zipCode'
    phone = '#customer\.phoneNumber'
    ssn = '#customer\.ssn'
    username = '#customer\.username'
    password = '#customer\.password'
    confirmPassword = '#repeatedPassword'
    submitRegistration = '[colspan="2"] > .button'


    
    submitRegistrationForm() {
        cy.get(this.submitRegistration).click()
        return this;
    }




}