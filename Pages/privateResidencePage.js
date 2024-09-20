class PrivateResidencePage {
    // locators of the elements of the private residence page
    textStep1of3Locator = '//div[text()="Step 1 of 3"]';
    increaseBedroomsLocator = '//button[@aria-label="Increase bedrooms"]';
    decreaseBedroomsLocator = '//button[@aria-label="Decrease bedrooms"]';
    
    increaseBathroomsLocator = '//button[@aria-label="Increase bathrooms"]';
    decreaseBathroomsLocator = '//button[@aria-label="Decrease bathrooms"]';
    
    bedroomNumberLocator = '//input[@name="bedroom-count"]';
    
    bathroomNumberLocator = '//input[@name="bathroom-count"]';
    
    nextBtnLocator = '//button[@id="propertyInfoNextBtn"]';
    
    textStep2of3Locator = '//div[text()="Step 2 of 3"]';
    
    textWheresYourPlaceLocator = '//h1[contains(text(), "your place located?")]'
    textYourPlaceLocator = '//h1[contains(text(), "your place located")]';
    
    enterAddressFieldLocator = '//input[@id="locationTypeAhead"]';
    
    allAutoSuggestionsLocator = '//li[@class="typeahead-prediction-item fds-list-item"]';
    
    mapLocator = '//div[@aria-label="Map"]';
    
    pinLocator = '//span[contains(text(), "To navigate")]/following-sibling::div';
    
    mapFooterLocator = '//span[contains(text(), "Move the pin")]';
    // functions to interact with the elements of the page
    async isStepsDisplayed() {
        const textStep1of3Element = await $(this.textStep1of3Locator);
        const textStep2of3Element = await $(this.textStep2of3Locator);
    
        const textSteps1Displayed = await textStep1of3Element.getText();
        const textSteps2Displayed = await textStep2of3Element.getText();
    
        if (textSteps1Displayed.includes('1') && await textStep1of3Element.isDisplayed()) {
            return true;
        } else if (textSteps2Displayed.includes('2') && await textStep2of3Element.isDisplayed()) {
            return true;
        } else {
            return false;
        }
    }

    async getBedroomNumberValue() {
        const bedroomNumberInput = await $(this.bedroomNumberLocator);
        const numberOfBedroomText = await bedroomNumberInput.getAttribute('value');
        const actualBedroomNumber = parseInt(numberOfBedroomText);
        return actualBedroomNumber;
     }
     async clickBedroomBtnPlus() {
        await $(this.increaseBedroomsLocator).click(); 
    }
    async clickBedroomBtnMinus() {
        await $(this.decreaseBedroomsLocator).click();
    }
    
    async getBathroomNumberValue() {
        const bathroomNumberInput = await $(this.bathroomNumberLocator);
        const numberOfBathroomText = await bathroomNumberInput.getAttribute('value');
        const actualBathroomNumber = parseInt(numberOfBathroomText);
        return actualBathroomNumber;
     }
    
    async clickBathroomBtnPlus() {
        await $(this.increaseBathroomsLocator).click();
    }
    async clickBathroomBtnMinus() {
        await $(this.decreaseBathroomsLocator).click();
    }
    
    async clickNextBtn() {
       
        await $(this.nextBtnLocator).click();
    }
    
    
    
}

module.exports = new PrivateResidencePage;