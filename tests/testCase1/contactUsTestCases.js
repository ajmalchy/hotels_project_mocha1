const { path } = require("chromedriver");
const automationContactUsPage = require("../../Pages/automationContactUsPage");
const automationlandingPage = require("../../Pages/automationlandingPage");

describe('Contact us test cases', () => {

    it.only('Enter name, email, subject and message', async () => {
        // user goes to automation website

        await browser.url('https://automationexercise.com/');
        await browser.pause(3000);

        // maximize window
        await browser.maximizeWindow();
        await browser.pause(1000);

        // click on contact us btn
        await automationlandingPage.selectFromNavbar("Contact Us");
        await browser.pause(3000);

        // enter information 
        await automationContactUsPage.enterInformation("name", "Kamla Shundori");

        await browser.pause(1000);

        await automationContactUsPage.enterInformation("email", "kamla@gmail.com");
        await browser.pause(1000);

        await automationContactUsPage.enterInformation("subject", "politics");
        
        await browser.pause(1000);

        await automationContactUsPage.enterInformation("message", "ghum ashe na ghum ashe na");
        await browser.pause(1000);

        // upload file
        await automationContactUsPage.uploadFile("D:/netPhotos/php-programming-html-coding-cyberspace-concept.jpg");

        await browser.pause(1000);

        await automationContactUsPage.clickSubmitBtn();
        await browser.pause(3000);

        await browser.acceptAlert(); // Clicks 'OK' (accepts the confirmation)
        await browser.pause(5000);


    })



})