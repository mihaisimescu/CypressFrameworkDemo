export class TransferFunds{

    //locators
    transferFundsTitle = '#showForm > .title'
    transferAmount = '#amount'
    fromAccountId = '#fromAccountId'
    toAccountId = '#toAccountId'
    submitTransfer = ':nth-child(4) > .button'
    newAccountId = '#newAccountId'

    transferSuccess = '#showResult > .title'

    clickSubmitButton(){
        cy.get(this.submitTransfer).click()
    }

    enterTransferAmount(){
        return cy.get(this.transferAmount)
    }

    getToAccountId(){
        return cy.get(this.toAccountId)
    }

    getFromAccountId(){
        return cy.get(this.fromAccountId)

    }

    getTransferSuccessMsg(){
        return cy.get(this.transferSuccess)
    }

}