class AutomationProductPage {
    // locators
    productsBtnLocator = '//a[@href="/products"]';
    allProductsHeadingLocator = '//h2[text()="All Products"]';

    allProductLocators = '//div[@class="product-image-wrapper"]';

    viewProductLocatorStarts = '//a[@href="/product_details/';
    viewProductLocatorEnds = '"]';
    // functions
    // all products heading displayed || products btn orange
    async isProductsBtnOrange() {
        const productsBtn = await $(this.productsBtnLocator);
        const productsBtnColor = await productsBtn.getAttribute("style");
        return productsBtnColor.includes("color: orange;");
    }

    async isAllProductsHeadingDisplayed(){
        const headingElement = await $(this.allProductsHeadingLocator);

        const isDisplayed = await headingElement.isDisplayed();

        if(isDisplayed) {
            const headingTxt = await headingElement.getText();
            return headingTxt.includes("ALL PRODUCTS");
        }
        return false;
    }

    async isProductListDisplayed() {
        const productList = await $$(this.allProductLocators);

        const allDisplayed = await Promise.all(productList.map(async (product) => {
            return await product.isDisplayed();
        }))

        return allDisplayed.every(isDisplayed => isDisplayed === true);
    }

    async clickViewProduct(productNumber) {
        const viewProductLocator = `${this.viewProductLocatorStarts}${productNumber}${this.viewProductLocatorEnds}`
        
        const viewProductElement = await $(viewProductLocator)

        await viewProductElement.click();
    }

    async getURL() {
        const currentUrl = await browser.getUrl();
        return currentUrl;
    }

    async getTitle() {
        const pageTitle = await browser.getTitle();
        return pageTitle;
    }
}
module.exports = new AutomationProductPage;