class Landingpage {
    // locators of elements on Landing page
    hotelsTrademarkLocator = '//a[@data-testid="header-brand-logo-anchor"]';
    signinLinkLocator = '//button[text()="Sign in"]';
    signinBtnLocator = '//a[contains(text(), "Sign in")]';
    // user clicks on trademark
  
    // functions to interact with the elements on landing page
    // user clicing trademark to reload the page to get rid of all the unnecessary popups 
    async clickTradeMarkToRefresh(){
        await $(this.hotelsTrademarkLocator).waitForClickable();
        await $(this.hotelsTrademarkLocator).click();
    }
    // User clicks on signin link
    async clickSigninLink() {
        await $(this.signinLinkLocator).waitForClickable();
        await $(this.signinLinkLocator).click();
    }
    // User clicks on signin button
    async clickSigninBtn() {
        await $(this.signinBtnLocator).waitForClickable();
        await $(this.signinBtnLocator).click();
    } 

}

module.exports = new Landingpage;