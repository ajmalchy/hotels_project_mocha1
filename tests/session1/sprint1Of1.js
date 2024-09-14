const { expect } = require("chai");
const landingPage = require("../../Pages/landingPage");
const signinPage = require("../../Pages/signinPage");
const listYourPropertyPage = require("../../Pages/listYourPropertyPage");

// refer test suite
describe('Sprint 1', () => {
    it.only('User goes to hotels website', async () => {
        // go to hotels.com
        await browser.url('https://www.hotels.com/')
        await browser.pause(5000);
        await landingPage.clickTradeMarkToRefresh();
        await browser.maximizeWindow();
        await browser.pause(4000);
    })

    it('User clicks on signin link', async () => {
        await landingPage.clickSigninLink();
        await browser.pause(2000);
    })

    it('User clicks signin btn', async () => {
        await landingPage.clickSigninBtn();
        await browser.pause(2000);
    })

    it('User enters an invalid email address', async () => {
        await signinPage.enterInvalidEmail("dgsdsgs");
        await browser.pause(3000);
    })

    it('User click Continue Btn', async () => {
        await signinPage.clickContinueBtn();
        await browser.pause(2000);
    })

    it('User enters an invalid 6 digit code', async () => {
        await signinPage.enterInvalidEmail("123456");
        await browser.pause(3000);
    })

    it('User click Continue Btn', async () => {
        await signinPage.clickContinueBtn();
        await browser.pause(2000);
    })

    it('User verifies error message is displayed', async () => {
        await signinPage.invalidEmailErrorIsDisplayed();
    })
// Verify Child-age dropdowns are same as number of Children selected
    it('User clicks on the travelers btn', async () => {
        await landingPage.clickTravelersBtn();
        await browser.pause(5000);
    })

    it('User selects children as 2', async () => {
        let previousChildrenCount;
        previousChildrenCount = await landingPage.getChildrenNumberValue();
        if (previousChildrenCount == 0) {
            for (let i = 0; i < 2; i++) {
                await landingPage.clickChildrenBtnPlus();
                await browser.pause(2000);
            }
        } else if
            (previousChildrenCount < 2) {
            const toIncrease = 2 - previousChildrenCount;
            for (let i = 0; i < toIncrease; i++) {
                await landingPage.clickChildrenBtnPlus();
                await browser.pause(2000);
            }
        } else {
            const toDecrease = previousChildrenCount - 2;
            for (let i = 0; i < toDecrease; i++) {
                await landingPage.clickChildrenBtnMinus();
                await browser.pause(2000);
            }
        }
    })
// problem
    it('User verifies that Children-age dropwdowns are 2', async () => {
        const actualDropDownCount = await landingPage.getVisibleChildrenDropdownCount();
        expect(actualDropDownCount).to.equal(2)
    })
    it('User verifies that the plus btn is enabled', async () => {
        const isButtonEnabled = await landingPage.isButtonEnabled("Plus");
        const expectedState = "enabled";

        if (expectedState === "enabled") {
            expect(isButtonEnabled).to.be.true;
        } else if (expectedState === "disabled") {
            expect(isButtonEnabled).to.be.false;
        }
    })
    it('User verifies that the minus btn is enabled', async () => {
        const isButtonEnabled = await landingPage.isButtonEnabled("Minus");
        const expectedState = "enabled";

        if (expectedState === "enabled") {
            expect(isButtonEnabled).to.be.true;
        } else if (expectedState === "disabled") {
            expect(isButtonEnabled).to.be.false;
        }
    })

    it('User selects children as 6', async () => {
        let previousChildrenCount;
        previousChildrenCount = await landingPage.getChildrenNumberValue();
        if (previousChildrenCount == 0) {
            for (let i = 0; i < 6; i++) {
                await landingPage.clickChildrenBtnPlus();
                await browser.pause(2000);
            }
        } else if
            (previousChildrenCount < 6) {
            const toIncrease = 6 - previousChildrenCount;
            for (let i = 0; i < toIncrease; i++) {
                await landingPage.clickChildrenBtnPlus();
                await browser.pause(2000);
            }
        } else {
            const toDecrease = previousChildrenCount - 6;
            for (let i = 0; i < toDecrease; i++) {
                await landingPage.clickChildrenBtnMinus();
                await browser.pause(2000);
            }
        }
    })

    it('User verifies that the plus btn is disabled', async () => {
        const isButtonEnabled = await landingPage.isButtonEnabled("Plus");
        const expectedState = "disabled";

        if (expectedState === "enabled") {
            expect(isButtonEnabled).to.be.true;
        } else if (expectedState === "disabled") {
            expect(isButtonEnabled).to.be.false;
        }
    })

    it('User verifies that the minus btn is enabled', async () => {
        const isButtonEnabled = await landingPage.isButtonEnabled("Minus");
        const expectedState = "enabled";

        if (expectedState === "enabled") {
            expect(isButtonEnabled).to.be.true;
        } else if (expectedState === "disabled") {
            expect(isButtonEnabled).to.be.false;
        }
    })

    it('User selects children as 5', async () => {
        let previousChildrenCount;
        previousChildrenCount = await landingPage.getChildrenNumberValue();
        if (previousChildrenCount == 0) {
            for (let i = 0; i < 5; i++) {
                await landingPage.clickChildrenBtnPlus();
                await browser.pause(2000);
            }
        } else if
            (previousChildrenCount < 5) {
            const toIncrease = 6 - previousChildrenCount;
            for (let i = 0; i < toIncrease; i++) {
                await landingPage.clickChildrenBtnPlus();
                await browser.pause(2000);
            }
        } else {
            const toDecrease = previousChildrenCount - 5;
            for (let i = 0; i < toDecrease; i++) {
                await landingPage.clickChildrenBtnMinus();
                await browser.pause(2000);
            }
        }
    })
    it('User verifies that the plus btn is enabled', async () => {
        const isButtonEnabled = await landingPage.isButtonEnabled("Plus");
        const expectedState = "enabled";

        if (expectedState === "enabled") {
            expect(isButtonEnabled).to.be.true;
        } else if (expectedState === "disabled") {
            expect(isButtonEnabled).to.be.false;
        }
    })
    it('User verifies that the minus btn is enabled', async () => {
        const isButtonEnabled = await landingPage.isButtonEnabled("Minus");
        const expectedState = "enabled";

        if (expectedState === "enabled") {
            expect(isButtonEnabled).to.be.true;
        } else if (expectedState === "disabled") {
            expect(isButtonEnabled).to.be.false;
        }
    })

    it('User selects children as 0', async () => {
        let previousChildrenCount;
        previousChildrenCount = await landingPage.getChildrenNumberValue();
        if (previousChildrenCount == 0) {
            for (let i = 0; i < 5; i++) {
                await landingPage.clickChildrenBtnPlus();
                await browser.pause(2000);
            }
        } else if
            (previousChildrenCount < 0) {
            const toIncrease = 0 - previousChildrenCount;
            for (let i = 0; i < toIncrease; i++) {
                await landingPage.clickChildrenBtnPlus();
                await browser.pause(2000);
            }
        } else {
            const toDecrease = previousChildrenCount - 0;
            for (let i = 0; i < toDecrease; i++) {
                await landingPage.clickChildrenBtnMinus();
                await browser.pause(2000);
            }
        }
    })
    it('User verifies that Children age dropdowns are not displayed', async () => {
        const isDropdownDisplayed = await landingPage.isChildrenDropdownDisplayed();
        expect(await isDropdownDisplayed).to.be.false;
    })
    it('User verifies that the plus btn is enabled', async () => {
        const isButtonEnabled = await landingPage.isButtonEnabled("Plus");
        const expectedState = "enabled";

        if (expectedState === "enabled") {
            expect(isButtonEnabled).to.be.true;
        } else if (expectedState === "disabled") {
            expect(isButtonEnabled).to.be.false;
        }
    })
    it('User verifies that the minus btn is disabled', async () => {
        const isButtonEnabled = await landingPage.isButtonEnabled("Minus");
        const expectedState = "disabled";

        if (expectedState === "enabled") {
            expect(isButtonEnabled).to.be.true;
        } else if (expectedState === "disabled") {
            expect(isButtonEnabled).to.be.false;
        }
    })

    // Verify language can be changed successfully
    it('User clicks on the English language', async () => {
        await landingPage.clickLanguageBtn();
        await browser.pause(2000);
    })

    it('User selects Espanol in the language dropdown', async () => {
        await landingPage.clickLanguageDropdown();
        await landingPage.selectLanguage('Español (Estados Unidos)');
        await browser.pause(2000);
    })
    it('User clicks on the Save btn', async () => {
        await landingPage.clickSaveLanguage('Save');
    })
    it('User verifies that the selected language Espanol is displayed on the homepage', async () => {
        await browser.pause(3000);
        const isLanguageDisplayed = await landingPage.isLanguageDisplayed('Español');
        expect(isLanguageDisplayed).to.be.true;
    })

    it('User clicks on the Espanol language', async () => {
        await landingPage.clickEspanolBtn()
    })
    it('User selects English in the language dropdown', async () => {
        await landingPage.clickLanguageDropdown();
        await landingPage.selectLanguage('English (United States)');
        await browser.pause(2000);
    })
    it('User clicks on the Guardar btn', async () => {
        await landingPage.clickSaveLanguage('Guardar');
    })

    it('User verifies that the selected language English is displayed on the homepage', async () => {
        await browser.pause(3000);
        const isLanguageDisplayed = await landingPage.isLanguageDisplayed('English');
        expect(isLanguageDisplayed).to.be.true;
    })

    // verify list your property flow
    it.only('User clicks on List your property', async () => {
        await landingPage.clickListYourProperty();
        await browser.pause(2000);
    })
    it.only('User verifies what would you like to list is displayed', async () => {
        await browser.pause(2000);
        const allHandles = await browser.getWindowHandles();  // Get all window handles
        for (const handle of allHandles) {
            await browser.switchToWindow(handle);  // Switch to each handle
            const title = await browser.getTitle();  // Get the title of the window
            if (title.includes('List Your Property')) {
                // Verify if "What would you like to list" is displayed
                const isListDisplayed = await listYourPropertyPage.isWhatWouldYouLikeToListDisplayed();
                expect(isListDisplayed).to.be.true;  // Correct assertion without parentheses
                return;  // Exit the loop after the check is done
            }
        }
    });

    it.only('User verifies Lodging and Private residence options are displayed', async () => {
        await browser.pause(2000);
        const allHandles = await browser.getWindowHandles();  // Get all window handles
        for (const handle of allHandles) {
            await browser.switchToWindow(handle);  // Switch to each handle
            const title = await browser.getTitle();  // Get the title of the window
            if (title.includes('List Your Property')) {
                const isLodgingDisplayed = await listYourPropertyPage.isLodgingDisplayed();
            const isPrivateResidenceDisplayed = await listYourPropertyPage.isPrivateResidenceDisplayed();
            expect(isLodgingDisplayed).to.be.true();
            expect(isPrivateResidenceDisplayed).to.be.true();
            return;
            }
        }
    })
    it.only('User clicks on private residence btn', async () => {
        await listYourPropertyPage.clickPrivateResidence();
        await browser.pause(2000);
    })
})


