export class Admin{

    //Admin page locator fields
    adminPageLink = ".leftmenu > :nth-child(6) > a"
    accessMode4 = "#accessMode4"

    clickAdminPage(){
        return cy.get(this.adminPageLink).click()
    }

    getJDBCOption(){
        return cy.get(this.accessMode4)
    }

}