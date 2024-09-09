export class Login{

//Login locatos fields
username = "input[name='username']"
password = "input[name='password']"
loginButton = "input[value='Log In']"
loginSuccessfull = ".smallText"


//Login functions

getUsername(){
    return cy.get(this.username)
}

getPassword(){
    return cy.get(this.password)
}

clickLoginButton(){
    return cy.get(this.loginButton).click()
}

}