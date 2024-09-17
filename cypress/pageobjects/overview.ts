export class Overview{

updateContactInfo = '#leftPanel > ul > :nth-child(6) > a'

clickUpdateProfile(){
    return cy.get(this.updateContactInfo).click()
}

}