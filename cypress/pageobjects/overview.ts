export class Overview{

openNewAccountLink = '#leftPanel > ul > :nth-child(1) > a'
transferFundsLink = '#leftPanel > ul > :nth-child(3) > a'
billPayPage = '#leftPanel > ul > :nth-child(4) > a' 
updateContactInfo = '#leftPanel > ul > :nth-child(6) > a'

clickBillPayPage(){
    cy.get(this.billPayPage).click()
    return this
}

clickUpdateProfile(){
    return cy.get(this.updateContactInfo).click()
}

clickTransferFundsPage(){
    cy.get(this.transferFundsLink).click()
}

clickOpenNewAccountLink(){
    cy.get(this.openNewAccountLink).click()
    return this
}

}