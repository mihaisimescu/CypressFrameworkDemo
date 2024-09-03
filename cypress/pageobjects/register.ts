export class Register {

    //Register fields
    firstName = '#firstName'
    lastName = '#lastName'
    address = '#address'
    city = '#city'
    state = '#state'
    zipCode = '#zipCode'
    phone = '#phone'
    ssn = '#ssn'
    username = '#username'
    password = '#password'
    confirmPassword = '#confirmPassword'
    submitRegistration = '#submitRegistration'


    
    submitRegistrationForm() {
        cy.get(this.submitRegistration).click()
        return this;
    }




}