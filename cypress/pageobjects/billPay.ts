import { getRandomNumber} from "../utils/helpers"

export class BillPay{

//Bill Payement locator fields
payeeName = ':nth-child(1) > [width="20%"] > .input'
address = ':nth-child(2) > [width="20%"] > .input'
city = ':nth-child(3) > [width="20%"] > .input'
state = ':nth-child(4) > [width="20%"] > .input'
zipCode = ':nth-child(5) > [width="20%"] > .input'
phone = "input[name='payee.phoneNumber']"
payeeAccount = ':nth-child(8) > :nth-child(2) > .input'
verifyAccount = ':nth-child(9) > [width="20%"] > .input'
amount = ':nth-child(11) > [width="20%"] > .input'
fromAccount = ':nth-child(13) > :nth-child(2) > .input'
sendPayementButton = ':nth-child(14) > :nth-child(2) > .button'

billPayFormTitle = '#billpayForm > .title'
billPayementSuccessfull = '#billpayResult > .title'


//Payee information form errors
errorName = '#validationModel-name'
errorAddress = '#validationModel-address'
errorCity = '#validationModel-city'
errorState = '#validationModel-state'
errorZipCode = '#validationModel-zipCode'
errorPhone = '#validationModel-phoneNumber'
errorAccount = '#validationModel-account-empty'
errorVerifyAccount = '#validationModel-verifyAccount-empty'
errorAmount = '#validationModel-amount-empty'

//functions
fillBillPayement(){

    let accountVar: string

    cy.get(this.payeeName).type('Digi')
    cy.get(this.address).type('Str. Galaxiei')
    cy.get(this.city).type('Brasov')
    cy.get(this.state).type('Romania')
    cy.get(this.zipCode).type(getRandomNumber(300,500).toString())
    cy.get(this.phone).type(getRandomNumber(1000,9000).toString())
    
    accountVar = getRandomNumber(10000,99999).toString()

    cy.get(this.payeeAccount).type(accountVar)
    cy.get(this.verifyAccount).type(accountVar)
    cy.get(this.amount).type(getRandomNumber(1,500).toString())
}

submitPayement(){
    cy.get(this.sendPayementButton).click()
    return this
}

getFormTitle(){
    return cy.get(this.billPayFormTitle)
}

getBillPayementSucessfullMsg(){
    return cy.get(this.billPayementSuccessfull)
}

checkIfFormFieldsAreEmpty(){

    cy.get(this.errorName)
        .should('not.be.visible')
    cy.get(this.errorAddress)
        .should('not.be.visible')
    cy.get(this.errorCity)
        .should('not.be.visible')
    cy.get(this.errorState)
        .should('not.be.visible')
    cy.get(this.errorZipCode)
        .should('not.be.visible')
    cy.get(this.errorPhone)
        .should('not.be.visible')
    cy.get(this.errorAccount)
        .should('not.be.visible')
    cy.get(this.errorAmount)
        .should('not.be.visible')

}

}