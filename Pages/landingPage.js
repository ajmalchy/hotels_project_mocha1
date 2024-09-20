class Landingpage {
    // locators of elements on Landing page
    hotelsTrademarkLocator = '//a[@data-testid="header-brand-logo-anchor"]';
    signinLinkLocator = '//button[text()="Sign in"]';
    signinBtnLocator = '//a[contains(text(), "Sign in")]';

    travelersBtnLocator = '//button[@data-stid="open-room-picker"]';

    childrenBtnPlusLocator = '//input[@id="traveler_selector_children_step_input-0"]/following-sibling::button';
    
    childrenBtnMinusLocator = '//input[@id="traveler_selector_children_step_input-0"]/preceding-sibling::button';

    allChildDropdownLocators = '//select[@class="uitk-field-select"]';

    dropDownFieldLocator_starts = '//select[@class="uitk-field-select"]//preceding-sibling::label[text()="';

    dropDownFieldLocator_ends = '"]'
    travelersDoneBtnLocator = '//button[@id="traveler_selector_done_button"]';

    totalTravelersLocator = '//button[@data-stid="open-room-picker"]';

    dropDownOptions_start = '//select[@class="uitk-field-select"]//option[text()="';
    dropDownOptions_end = '"]';
    childrenNumberLocator = '//input[@id="traveler_selector_children_step_input-0"]';

    languageBtnLocator = '//button[@data-stid="button-type-picker-trigger"]';

    languageDropdownLocator = '//select[@id="language-selector"]';

    optionEnglishLocator = '//select[@id="language-selector"]//option[text()="English (United States)"]'
    optionEspanolLocator = '//select[@id="language-selector"]//option[text()="Español (Estados Unidos)"]';

    saveEnglishLocator = '//button[text()="Save"]';
    saveGuardarLocator = '//button[text()="Guardar"]';
    homeEspanolLocator = '//button[text()="Español"]';
    homeEnglishLocator = '//button[text()="English"]';

    listYourPropertyLocator = '//a[@data-stid="listYourProperty-link"]';
  
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
    // User clicks on travelers button
    async clickTravelersBtn() {
        await $(this.travelersBtnLocator).waitForClickable();
        await $(this.travelersBtnLocator).click();
    }

    // User selects children as 2
    /**
     * get children number
     * click plus or minus btn to select desired of children
     */
    async getChildrenNumberValue() {
        await $(this.childrenNumberLocator).waitForDisplayed();
        const childrenNumberInput = await $(this.childrenNumberLocator);
        const numberOfChildrenText = await childrenNumberInput.getAttribute("value");
        const actualChildrenNumber = parseInt(numberOfChildrenText);
        return actualChildrenNumber;
    }
    async clickChildrenBtnPlus() {
        await $(this.childrenBtnPlusLocator).waitForClickable();
        await $(this.childrenBtnPlusLocator).click();
    }
    async clickChildrenBtnMinus() {
        await $(this.childrenBtnMinusLocator).waitForClickable();
        await $(this.childrenBtnMinusLocator).click();
    }
    // user verifies that children dropdown count is 2
    /**
     * get visible children dropdown count
     * verify that visible dropdown count is 2 or isDisplayed
     * 
     */

    // problem
    async getVisibleChildrenDropdownCount() {
        const dropdownElements = await $$(this.allChildDropdownLocators);
        return await dropdownElements.length;
       
        

    }
    async isChildrenDropdownDisplayed() {
        const dropdownElements = await $$(this.allChildDropdownLocators);
        
        if (dropdownElements.length > 0) {
            const dropdownElement = dropdownElements.find(async (element) => await element.isDisplayed());
            return dropdownElement;
        } else {
            return false;
        }
    }

    // user verifies that plus and minus btn are enabled or disabled
    async isButtonEnabled(buttonType) {
        let buttonSelector;
        if (buttonType == 'Plus') {
            buttonSelector = '//input[@id="traveler_selector_children_step_input-0"]/following-sibling::button';
        } else if (buttonType == 'Minus') {
            buttonSelector = '//input[@id="traveler_selector_children_step_input-0"]/preceding-sibling::button';
        }
        const buttonElement = await $(buttonSelector);
        return await buttonElement.isEnabled();
    }
     // Verify language can be changed successfully
 async clickLanguageBtn () {
    
    await $(this.languageBtnLocator).click();
 }

 async clickLanguageDropdown () {
    
    await $(this.languageDropdownLocator).click();
 }

 async selectLanguage(language) {
    switch (language) {
        case 'Español (Estados Unidos)':
            await $(this.optionEspanolLocator).click();
            break;
        case 'English (United States)':
            await $(this.optionEnglishLocator).click();
            break;
    
        default:
            break;
    }
 }
 async clickSaveLanguage(saveLanguage) {
    switch (saveLanguage) {
        case 'Save':
            await $(this.saveEnglishLocator).click();
            break;
        case 'Guardar':
            await $(this.saveGuardarLocator).click();
            break;
    
        default:
            break;
    }
 }

 async isLanguageDisplayed(language) {
    switch (language) {
        case 'Español':
        const displayedLanguage =await $(this.homeEspanolLocator).getText();
            return displayedLanguage === language;
           
        case 'English':
            const displayedLanguage1 = await $(this.homeEnglishLocator).getText();
            return displayedLanguage1 === language;
            
    
        default:
            return false;
    }
 }
 async clickEspanolBtn() {
    await $(this.homeEspanolLocator).click();
 }
 async clickListYourProperty() {
    await $(this.listYourPropertyLocator).click();
 }
}

module.exports = new Landingpage;