 class AutomationSignupPage {
    // locators
    enterAccountInformationHeadingLocator = '//b[text()="Enter Account Information"]';

    checkmarkMrLocator = '#id_gender1';
    checkmarkMrsLocator = '#id_gender2';

    passwordFieldLocator = '#password';
    
    // dob locators
    dobDayLocator = '#days';
    dobMonthLocator = '#months';
    dobYearLocator = '#years';

    
    checkmarkNewsletterLocator = '#newsletter';
    checkmarkOptinLocator = '#optin';
    firstNameLocator = '#first_name';
    lastNameLocator = '#last_name';
    companyNameLocator = '#company';
    address1Locator = '#address1';
    address2Locator = '#address2';

    // country locators
    countryNameLocator = '#country';
    stateNameLocator = '#state';
    cityNameLocator = '#city';
    zipCodeLocator = '#zipcode';
    mobileNumberLocator = '#mobile_number';
    BtnCreateAccountLocator = '//button[@data-qa="create-account"]';

    // functions

    async isEnterAccInfoDisplayed() {
        const headingElement = await $(this.enterAccountInformationHeadingLocator);
        const isDisplayed = await headingElement.isDisplayed();
        if(isDisplayed){
            const headingTxt = await headingElement.getText();
            console.log(headingTxt);
            return headingTxt.includes("ENTER ACCOUNT INFORMATION");
        }
       return false;    
    }

    async selectTitle(title) {
        switch (title) {
         case 'Mr.':
         await $(this.checkmarkMrLocator).click();
        break;

        case 'Mrs.':
         await $(this.checkmarkMrsLocator).click();
        break;

        default:
        break;
    }
    }

    async setPassword(password) {
        const passwordField = await $(this.passwordFieldLocator);

        await passwordField.click();

        await passwordField.setValue(password)

    }

    async selectDateOfBirth(day,month,year) {

        // select day
        await $(this.dobDayLocator).selectByIndex(day);

        // select month
        await $(this.dobMonthLocator).selectByIndex(month);

        // select year
        await $(this.dobYearLocator).selectByVisibleText(year);
        
    }

    async checkMarkNewsLetter() {
        await $(this.checkmarkNewsletterLocator).click();
    }

    async checkMarkOptin() {
        await $(this.checkmarkOptinLocator).click();
    }

    async enterFirstName(fName) {
        const firstName = await $(this.firstNameLocator);

        await firstName.click();
        await firstName.setValue(fName);

    }

    async enterLastName(lName) {
        const lastName = await $(this.lastNameLocator);

        await lastName.click();
        await lastName.setValue(lName);
    }

    async enterCompanyName(coName) {
        const companyName = await $(this.companyNameLocator);

        await companyName.click();
        await companyName.setValue(coName);
    }

    async enterAddress1(address) {
        const userAddress = await $(this.address1Locator);

        await userAddress.click();
        await userAddress.setValue(address);
    }
    async enterAddress2(address) {
        const userAddress2 = await $(this.address2Locator);

        await userAddress2.click();
        await userAddress2.setValue(address);
    }

    async selectCountry(countryName) {
        await $(this.countryNameLocator).selectByVisibleText(countryName);
    }

    async enterStateName(sName) {
        const stateName = await $(this.stateNameLocator);

        await stateName.click();
        await stateName.setValue(sName);
    }

    async enterCityName(cName) {
        const cityName = await $(this.cityNameLocator);

        await cityName.click();
        await cityName.setValue(cName);
    }

    async enterZipcode(zCode) {
        const zipCode = await $(this.zipCodeLocator);

        await zipCode.click();
        await zipCode.setValue(zCode);
    }

    async enterMobileNumber(mNumber) {
        const mobileNumber = await $(this.mobileNumberLocator);

        await mobileNumber.click();
        await mobileNumber.setValue(mNumber);
    }

    async clickCreateAccBtn() {
        await $(this.BtnCreateAccountLocator).click();
    }
 }

 module.exports = new AutomationSignupPage;