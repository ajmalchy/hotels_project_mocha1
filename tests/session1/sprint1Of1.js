const { expect } = require("chai");
const landingPage = require("../../Pages/landingPage");
const signinPage = require("../../Pages/signinPage");

// refer test suite
describe('Sprint 1', () => {
    it.only('User goes to hotels website', async () => {
        // go to hotels.com
        await browser.url('https://www.hotels.com/')
        await browser.pause(5000);
        await landingPage.clickTradeMarkToRefresh();
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
    it.only('User clicks on the travelers btn', async () => {
        await landingPage.clickTravelersBtn();
        await browser.pause(5000);
    })

    it.only('User selects children as 2', async () => {
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
    it.only('User verifies that the plus btn is enabled', async () => {
        const isButtonEnabled = await landingPage.isButtonEnabled("Plus");
        const expectedState = "enabled";

        if (expectedState === "enabled") {
            expect(isButtonEnabled).to.be.true;
        } else if (expectedState === "disabled") {
            expect(isButtonEnabled).to.be.false;
        }
    })
    it.only('User verifies that the minus btn is enabled', async () => {
        const isButtonEnabled = await landingPage.isButtonEnabled("Minus");
        const expectedState = "enabled";

        if (expectedState === "enabled") {
            expect(isButtonEnabled).to.be.true;
        } else if (expectedState === "disabled") {
            expect(isButtonEnabled).to.be.false;
        }
    })

    it.only('User selects children as 6', async () => {
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

    it.only('User verifies that the plus btn is disabled', async () => {
        const isButtonEnabled = await landingPage.isButtonEnabled("Plus");
        const expectedState = "disabled";

        if (expectedState === "enabled") {
            expect(isButtonEnabled).to.be.true;
        } else if (expectedState === "disabled") {
            expect(isButtonEnabled).to.be.false;
        }
    })

    it.only('User verifies that the minus btn is enabled', async () => {
        const isButtonEnabled = await landingPage.isButtonEnabled("Minus");
        const expectedState = "enabled";

        if (expectedState === "enabled") {
            expect(isButtonEnabled).to.be.true;
        } else if (expectedState === "disabled") {
            expect(isButtonEnabled).to.be.false;
        }
    })

    it.only('User selects children as 5', async () => {
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
    it.only('User verifies that the plus btn is enabled', async () => {
        const isButtonEnabled = await landingPage.isButtonEnabled("Plus");
        const expectedState = "enabled";

        if (expectedState === "enabled") {
            expect(isButtonEnabled).to.be.true;
        } else if (expectedState === "disabled") {
            expect(isButtonEnabled).to.be.false;
        }
    })
    it.only('User verifies that the minus btn is enabled', async () => {
        const isButtonEnabled = await landingPage.isButtonEnabled("Minus");
        const expectedState = "enabled";

        if (expectedState === "enabled") {
            expect(isButtonEnabled).to.be.true;
        } else if (expectedState === "disabled") {
            expect(isButtonEnabled).to.be.false;
        }
    })

    it.only('User selects children as 0', async () => {
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
    it.only('User verifies that Children age dropdowns are not displayed', async () => {
        const isDropdownDisplayed = await landingPage.isChildrenDropdownDisplayed();
        expect(await isDropdownDisplayed).to.be.false;
    })
    it.only('User verifies that the plus btn is enabled', async () => {
        const isButtonEnabled = await landingPage.isButtonEnabled("Plus");
        const expectedState = "enabled";

        if (expectedState === "enabled") {
            expect(isButtonEnabled).to.be.true;
        } else if (expectedState === "disabled") {
            expect(isButtonEnabled).to.be.false;
        }
    })
    it.only('User verifies that the minus btn is disabled', async () => {
        const isButtonEnabled = await landingPage.isButtonEnabled("Minus");
        const expectedState = "disabled";

        if (expectedState === "enabled") {
            expect(isButtonEnabled).to.be.true;
        } else if (expectedState === "disabled") {
            expect(isButtonEnabled).to.be.false;
        }
    })
})


