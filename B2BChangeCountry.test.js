describe('B2B Change country', function () {

    var sleep = function () {
        browser.sleep(5000);
      };
    
      beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://152.109.212.24:9090/B2B-FE/#/?page=0&pageSize=12');
        element(by.className('country-select')).click();
        sleep();
        element(by.className('flag flag-ae')).click();
        sleep();
        element(by.className('lang-select')).click();
        sleep();
        element(by.cssContainingText('.white-forground','English')).click();
        sleep();

      }); 

    it('Test Case:Change Country', function () {
        //search for item 21111279
        element(by.className('search')).element(by.tagName('input')).sendKeys('21111279');
        element(by.className('search')).element(by.tagName('button')).click();
        sleep();

        // check name of returened sku is (Brooke Bond Red Label Black Tea Loose 5Kg)
        var prodName = element(by.className('row-product')).getText();
        expect(prodName).toContain('Brooke Bond Red Label Black Tea Loose 5Kg');
        sleep();

    });
});