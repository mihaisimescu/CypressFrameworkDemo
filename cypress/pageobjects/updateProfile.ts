export class UpdateProfile {

    firstName = '#customer\\.firstName'
    lastName = '#customer\\.lastName'
    address = ':nth-child(3) > [align="right"] > b'
    city = '#customer\\.address\\.city'
    state = '#customer\\.address\\.state'
    zipCode = '#customer\\.address\\.zipCode'
    phone = '#customer\\.phoneNumber'
    submitButoon = '[colspan="2"] > .button'
    updateSuccessfullMsg = '#updateProfileResult > .title'
    formTitle = '#updateProfileForm > .title'

    getFormTitle(){
        return cy.get(this.formTitle)
    }

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

    clickSubmitButton(){
        return cy.get(this.submitButoon).click()
    }

    getSucessMsg(){
        return cy.get(this.updateSuccessfullMsg)
    }

}