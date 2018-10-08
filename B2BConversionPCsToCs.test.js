describe('B2B Conversion from PCs to Cs', function () {
    require('./B2BLogin.test.js');
     
     var sleep = function () {
         browser.sleep(5000);
       };
     
       beforeEach(function () {
         browser.waitForAngularEnabled(false);
         browser.get('http://152.109.212.24:9090/B2B-FE/#/?page=0&pageSize=12');
       });

     it('Test Case:conversion PCs to Cs ', function () {
        //select SKU 12311
        element(by.className('search')).element(by.tagName('input')).sendKeys('12311');
        element(by.className('search')).element(by.tagName('button')).click();
        sleep();

        //put 10 items 
        element(by.css('.ui-spinner-input')).sendKeys(protractor.Key.BACK_SPACE);
        element(by.css('.ui-spinner-input')).sendKeys("10");
        element(by.className('row')).click();
        sleep();

        //check if price = 500 EGP
        var price = element(by.className('price-summary')).element(by.tagName('strong')).getText();
        expect(price).toContain('500.00 EGP');

        //select radio button of Cs
        element.all(by.className('mat-radio-outer-circle')).then(function(option){
            option[1].click();
        });
        sleep();

        //check if price = 1000 EGP
        var price = element(by.className('price-summary')).element(by.tagName('strong')).getText();
        expect(price).toContain('1,000.00 EGP');
        
       });

    });