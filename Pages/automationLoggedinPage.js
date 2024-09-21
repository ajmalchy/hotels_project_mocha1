class AutomationLoggedinPage {
    // locators
    btnDeleteAccLocator = '//a[@href="/delete_account"]';
    // functions
    async clickDeleteAccount() {
        await $(this.btnDeleteAccLocator).click();
    }
}

module.exports = new AutomationLoggedinPage;