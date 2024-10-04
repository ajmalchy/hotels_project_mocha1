class AutomationProductPage {
    // locators
    productsBtnLocator = '//a[@href="/products"]';
    allProductsHeadingLocator = '//h2[text()="All Products"]';
    // functions
    // all products heading displayed || products btn orange
    async isProductsBtnOrange() {
        const productsBtn = await $(this.productsBtnLocator);
        const productsBtnColor = await productsBtn.getAttribute("style");
        return productsBtnColor.includes("color: orange;");
    }

    async isAllProductsHeadingDisplayed(){
        const headingElement = await $(this.allProductsHeadingLocator);

        const isDisplayed = headingElement.isDisplayed();

        if(isDisplayed) {
            const headingTxt = await headingElement.getText();
            return headingTxt.includes("ALL PRODUCTS");
        }
        return false;
    }
}
module.exports = new AutomationProductPage;