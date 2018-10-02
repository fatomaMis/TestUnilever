describe('B2B Change Language', function () {

    require('./B2BLogin.test.js');

    var sleep = function () {
        browser.sleep(5000);
      };
    
      beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://152.109.212.24:9090/B2B-FE/#/?page=0&pageSize=12');
      });      
      
    it('Test Case:Change Language', function () {
        //change lang to english
        element(by.className('lang-select')).click();
        sleep();
        element(by.cssContainingText('.white-forground','English')).click();
        sleep();

        //check on categories
        var catName = element(by.className('content-filter')).element(by.className('title')).getText();
        expect(catName).toEqual('CATEGORIES');

        //check on Brand
        element.all(by.className('content-filter')).then(function(brand){
            var brandName = brand[2].element(by.className('title')).getText();
            expect(brandName).toEqual('BRANDS');
        });
        //check on name of code 64220726
        element(by.className('search')).element(by.tagName('input')).sendKeys('64220726');
        element(by.className('search')).element(by.tagName('button')).click();
        var prodName = element(by.className('row-product')).getText();
        expect(prodName).toContain('LIPTON TEA SPICES CONT PR 72X50TBX2G');
        sleep();

        //change lang to arabic
        element(by.className('lang-select')).click();
        sleep();
        element(by.cssContainingText('.white-forground','العربيه')).click();
        sleep();

        //check on الفئات
        var catName = element(by.className('content-filter')).element(by.className('title')).getText();
        expect(catName).toEqual('الفئات');

        //check on name of code 64220726
        var prodName = element(by.className('row-product')).getText();
        expect(prodName).toContain('شاى ليبتون نكهات');

        //check on  العلامات التجارية
        element.all(by.className('content-filter')).then(function(brand){
            var brandName = brand[2].element(by.className('title')).getText();
            expect(brandName).toEqual('  العلامات التجارية');
        });

    });

});