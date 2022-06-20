/// <reference types="cypress" />

const validUsersData = require('../../fixtures/validusers')
const inValidUsersData = require('../../fixtures/invalidusers')

import DashBoardPage from '../../pages/dashBoardPage';
import LoginPage from '../../pages/loginPage';
const loginPage = new LoginPage();
const dashBoardPage = new DashBoardPage();

context('Login Functioanlity Test Suite', () => {

  beforeEach(() => {
    loginPage.navigate('/index.php');
  })

  validUsersData.forEach(user => {
    it('verify login functionality with valid user having email <'+ user.email + '>',()=>{
      loginPage.fillLoginCredentials(user.email,user.pwd);
      loginPage.clickTosubmitBtn();
      dashBoardPage.getMyAccountElement().should('have.text','My account')
    })
  })
  
  
  
  inValidUsersData.forEach(user => {
    it('verify login functionality with invalid user having email <'+ user.email + '>',()=>{
      loginPage.fillLoginCredentials(user.email,user.pwd);
      loginPage.clickTosubmitBtn();
      loginPage.hasDangerAlertEle();
    })
  })

  
 
})
