const { expect } = require('chai');


// refer test suite
describe('sample test suite', ()=> {
    // refer test case
    it('sample test case', async() => {
        // go to hotels.com
        await browser.url('https://www.hotels.com/')
        await browser.pause(5000);
        // user clicks on trademark
        const hotelsTrademarkLocator = await $('//a[@data-testid="header-brand-logo-anchor"]');
        await hotelsTrademarkLocator.click();
        // user clicks on Travelers button
        const travelersBtnLocator = await $('//button[@data-stid="open-room-picker"]');
        // await travelersBtnLocator.waitForClickable();
        await travelersBtnLocator.click();
        await browser.pause(5000);

        // user selects children as 2
        
        const childrenNumberLocator = await $('//input[@id="traveler_selector_children_step_input-0"]');
        await childrenNumberLocator.waitForDisplayed();
        const childrenNumberInput = await childrenNumberLocator;
        const numberOfChildrenText = await childrenNumberInput.getAttribute('value');
        const actualChildrenNumber = parseInt(numberOfChildrenText);
        let previousChildrenCount = actualChildrenNumber;

        if (previousChildrenCount == 0) {
            for (let i = 0; i < 2; i++) {
                const childrenBtnPlusLocator = await $('//input[@id="traveler_selector_children_step_input-0"]/following-sibling::button');

                await childrenBtnPlusLocator.waitForClickable;
                await childrenBtnPlusLocator.click();
                await browser.pause(2000);
            }
        } else if (previousChildrenCount < 2) {
            const toIncrease = 2 - previousChildrenCount;
            for (let i = 0; i < toIncrease; i++) {
                const childrenBtnPlusLocator = await $('//input[@id="traveler_selector_children_step_input-0"]/following-sibling::button');

                await childrenBtnPlusLocator.waitForClickable;
                await childrenBtnPlusLocator.click();
                await browser.pause(2000);
            }
        }
        else {
            const  toDecrease = previousChildrenCount - 2;
            for (let i = 0; i < toDecrease; i++) {
                const childrenBtnMinusLocator = await $('//input[@id="traveler_selector_children_step_input-0"]/preceding-sibling::button');

                await childrenBtnMinusLocator.waitForClickable;
                await childrenBtnMinusLocator.click();
                await browser.pause(2000);
            }
        }

        // problem
        // User verifies that Children-age dropdowns are 2
        const allVisibleDropdownElements = $$('//select[@class="uitk-field-select"]');
        const visibleChildrenDropdownCount = allVisibleDropdownElements.filter((element) => {
            element.isDisplayed().length; 
        });
        
        // something wrong with chai-expect

        expect(visibleChildrenDropdownCount).to.equal(2);
    })
   
})