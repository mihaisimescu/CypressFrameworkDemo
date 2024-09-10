export class Login{

//Login locatos fields
username = "input[name='username']"
password = "input[name='password']"
loginButton = "input[value='Log In']"
loginSuccessfull = ".smallText"
logoutButton = '#leftPanel > ul > :nth-child(8) > a'

// error
loginError = '.error'


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

clickLogoutButton(){
    return cy.get(this.logoutButton).click()
}

getloginSuccessfullMsg(){
    return cy.get(this.loginSuccessfull)
}

getLoginErrorMsg(){
    return cy.get(this.loginError)
}

}