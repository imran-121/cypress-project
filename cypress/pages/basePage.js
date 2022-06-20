export default class BasePage {

    baseUrl       = "http://automationpractice.com";
    navigate(path) {
        cy.visit(this.baseUrl + path)
        cy.clearCookies()
    }
    
}