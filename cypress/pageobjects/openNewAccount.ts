export class OpenNewAccount{

    //Locators
    openNewAccountLink = '#leftPanel > ul > :nth-child(1) > a'
    openNewAccountTitle = '#openAccountForm > .title'
    accountType = '#type'
    fromAccount = '#fromAccountId'
    submitOpenNewAccount = 'form > div > .button'

    newAccountOpenedMsg = '#openAccountResult > .title'
    newAccountNumber = '#newAccountId'

    clickOpenNewAccountLink(){
        cy.get(this.openNewAccountLink).click()
        return this
    }

    getOpenNewAccountTitle(){
        return cy.get(this.openNewAccountTitle)
    }

    clickSubmitOpenNewAccount(){
        return cy.get(this.submitOpenNewAccount).click()
    }

    getAccountType(){
        return cy.get(this.accountType)
    }

    getFromAccount(){
        return cy.get(this.fromAccount)
    }

    getNewAccountOpenedMsg(){
        return cy.get(this.newAccountOpenedMsg)
    }

    getNewAccountNumber(){
        return cy.get(this.newAccountNumber)
    }
}