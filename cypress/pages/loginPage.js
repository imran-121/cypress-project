
import BasePage from './basePage.js'

export default class LoginPage extends BasePage {

    /*constructor() {
        super()
    }*/
    
    loginButton     = ".login";
    emailField     = "#email";
    passField = "#passwd";
    submitButton = "#SubmitLogin";
    dangerAlertBox = "div.alert.alert-danger"

    fillLoginCredentials(email,pass) {
        cy.get(this.loginButton).click()
        cy.get(this.emailField).type(email)
        cy.get(this.passField).type(pass)
        
    }
    
    clickTosubmitBtn() {
        cy.get(this.submitButton).click()
    } 

    hasDangerAlertEle(){
        return cy.get(this.dangerAlertBox, { timeout: 30000 })
    }

}
