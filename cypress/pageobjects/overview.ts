export class Overview{

overviewLink = '#leftPanel > ul > :nth-child(2) > a'
openNewAccountLink = '#leftPanel > ul > :nth-child(1) > a'
transferFundsLink = '#leftPanel > ul > :nth-child(3) > a'
billPayPage = '#leftPanel > ul > :nth-child(4) > a' 
updateContactInfo = '#leftPanel > ul > :nth-child(6) > a'

clickOverviewLink(){
    cy.get(this.overviewLink).click()
}

clickBillPayPage(){
    cy.get(this.billPayPage).click()
     
}

clickUpdateProfile(){
    cy.get(this.updateContactInfo).click()
}

clickTransferFundsPage(){
    cy.get(this.transferFundsLink).click()
}

clickOpenNewAccountLink(){
    cy.get(this.openNewAccountLink).click()
}

}