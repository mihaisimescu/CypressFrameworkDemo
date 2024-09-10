export class Admin{

    //Admin page locator fields
    adminPageLink = ".leftmenu > :nth-child(6) > a"
    accessMode4 = "#accessMode4"
    submitButton = "input[value = 'Submit']"

    clickAdminPage(){
        return cy.get(this.adminPageLink).click()
    }

    getJDBCOption(){
        return cy.get(this.accessMode4)
    }

    clickSubmitButton(){
        return cy.get(this.submitButton).click()
    }

}