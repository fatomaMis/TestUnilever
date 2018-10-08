describe('B2B Change Language', function () {

    var sleep = function () {
        browser.sleep(5000);
      };
    
      beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://152.109.212.24:9090/B2B-FE/#/?page=0&pageSize=12');
      });      
      
    it('Test Case:Change Language', function () {
        //login
        element(by.className('header__user-actions no-margin')).click();
        sleep();

        element(by.id('username')).sendKeys('cust1');
        element(by.name('password')).sendKeys('123123');
        element(by.className('btn mat-button btn-primary btn-auth')).click();
        sleep();

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

        //check on upper menue cleaning
        element.all(by.className('cat-name')).then(function(item){
            var name = item[0].getText();
            expect(name).toContain('Cleaning');
        });

        //check on upper menue foods category
        element.all(by.className('cat-name')).then(function(item){
            var name = item[1].getText();
            expect(name).toContain('Foods Category');
        });
        
        //check on name of code 64220726
        element(by.className('search')).element(by.tagName('input')).sendKeys('64220726');
        element(by.className('search')).element(by.tagName('button')).click();
        sleep();

        //check on name 
        var prodName = element(by.className('row-product')).getText();
        expect(prodName).toContain('LIPTON TEA SPICES CONT PR 72X50TBX2G');
        
    //clear search bar
    element(by.className('search')).element(by.tagName('input')).clear();
    sleep();
        
        //check on name of code 12311
        element(by.className('search')).element(by.tagName('input')).sendKeys('12311');
        element(by.className('search')).element(by.tagName('button')).click();
        sleep();

        //check on name 
        var prodName = element(by.className('row-product')).getText();
        expect(prodName).toContain('Whitening Cream Gold2');
        
        
        
        
        
        //change lang to arabic
        element(by.className('lang-select')).click();
        sleep();
        element(by.cssContainingText('.white-forground','العربيه')).click();
        sleep();

        //clear search bar
        element(by.className('search')).element(by.tagName('input')).clear();
        sleep();

        //check on الفئات
        var catName = element(by.className('content-filter')).element(by.className('title')).getText();
        expect(catName).toEqual('الفئات');

        //check on upper menue cleaning
        element.all(by.className('cat-name')).then(function(item){
            var name = item[0].getText();
            expect(name).toContain('تنظيف');
        });

        //check on upper menue foods category
        element.all(by.className('cat-name')).then(function(item){
            var name = item[2].getText();
            expect(name).toContain('Foods Category');
        });

        //check on name of code 64220726
        element(by.className('search')).element(by.tagName('input')).sendKeys('64220726');
        element(by.className('search')).element(by.tagName('button')).click();
        sleep();

        //check on name of code 64220726
        var prodName = element(by.className('row-product')).getText();
        expect(prodName).toContain('شاى ليبتون نكهات');

        //check on  العلامات التجارية
        element.all(by.className('content-filter')).then(function(brand){
            var brandName = brand[2].element(by.className('title')).getText();
            expect(brandName).toEqual('  العلامات التجارية');
        });

        //clear search bar
        element(by.className('search')).element(by.tagName('input')).clear();
        sleep();

        //check on name of code 12311
        element(by.className('search')).element(by.tagName('input')).sendKeys('12311');
        element(by.className('search')).element(by.tagName('button')).click();
        sleep();

        //check on name 
        var prodName = element(by.className('row-product')).getText();
        expect(prodName).toContain('Whitening Cream Gold2');

    });

});