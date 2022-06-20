import BasePage from "./basePage"

export default class DashBoardPage extends BasePage{

    /*constructor() {
        super()
    }*/
    
    myAccountTag   = 'h1[class="page-heading"]'
    getMyAccountElement(){
        return cy.get(this.myAccountTag)
    }

}