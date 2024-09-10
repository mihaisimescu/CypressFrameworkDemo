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

//functions
getPayeeName(){
    return cy.get(this.payeeName)
}

getAddress(){
    return cy.get(this.address)
}

getCity(){
    
}


}