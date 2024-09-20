class ListYourPropertyPage {
    // element locator of ListYourPropertyPage
    whatWouldYouLikeToListLocator = '//p[text()="What would you like to list?"]';

    textLodgingLocator = '//p[text()="Lodging"]';
    textPrivateResidenceLocator = '//p[text()="Private residence"]';

    privateResidenceBtnLocator = '//p[text()="Private residence"]';
    // functions to interact with the page
    async isWhatWouldYouLikeToListDisplayed() {
        const textList = await $(this.whatWouldYouLikeToListLocator);
        await textList.waitForDisplayed({ timeout: 5000 });
        
        const textListDisplayed = await textList.getText(); // Await getText()
    
        if (textListDisplayed === "What would you like to list?" && await textList.isDisplayed()) {
            return true;  // If the text matches and the element is displayed, return true
        }
        return false; 
    }

    async isLodgingDisplayed() {
        const textLodging = await $(this.textLodgingLocator);
        const textLodgingDisplayed = await textLodging.getText();

        if (textLodgingDisplayed === "Lodging" && await textLodging.isDisplayed()) {
            return true;  // If the text matches and the element is displayed, return true
        }
        return false; 
    }
    async isPrivateResidenceDisplayed() {
        const textPrivateResidence = await $(this.textPrivateResidenceLocator);
        const textPrivateResidenceDisplayed = await textPrivateResidence.getText();

        if (textPrivateResidenceDisplayed === "Private residence" && await textPrivateResidence.isDisplayed()) {
            return true;  // If the text matches and the element is displayed, return true
        }
        return false; 
    }
// problem
    async clickPrivateResidence() {
        try {
            const privateResidenceBtn = await $(this.privateResidenceBtnLocator);
            await privateResidenceBtn.waitForDisplayed({ timeout: 5000 });  // Ensure the element is displayed
           
            await privateResidenceBtn.click();   // Perform the click action
        } catch (error) {
            console.error("Error clicking Private Residence button:", error);
        }
    }


}

module.exports = new ListYourPropertyPage;