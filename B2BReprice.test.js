describe('B2B Reprice', function () {
    require('./B2BLogin.test.js');
     
     var sleep = function () {
         browser.sleep(5000);
       };
     
       beforeEach(function () {
         browser.waitForAngularEnabled(false);
         browser.get('http://152.109.212.24:9090/B2B-FE/#/?page=0&pageSize=12');
       });
 
  it('Test Case:Reprice ', function () {
    //Select SKU1 64220726 and set quantity to it
    element.all(by.css('.product-card')).then(function(sku1){
      //check on price 
        var price1 = sku1[3].element(by.tagName('strong')).getText();
        expect(price1).toContain('45.00 EGP');

      var price2 = sku1[3].element(by.tagName('del')).getText();
        expect(price2).toContain('100.00 EGP');

      //change quantity to 10
        sku1[3].element(by.css('.ui-spinner-input')).sendKeys(protractor.Key.BACK_SPACE);
        sku1[3].element(by.css('.ui-spinner-input')).sendKeys("10");
        element(by.className('product-sec1 row')).click();
        sleep();

      //check reprice
        var price1 = sku1[3].element(by.tagName('strong')).getText();
        expect(price1).toContain('450.00 EGP');

        var price2 = sku1[3].element(by.tagName('del')).getText();
        expect(price2).toContain('1,000.00 EGP');

      //change quantity to 15
        sku1[3].element(by.css('.ui-spinner-input')).sendKeys(protractor.Key.BACK_SPACE);
        sku1[3].element(by.css('.ui-spinner-input')).sendKeys("5");
        element(by.className('product-sec1 row')).click();
        sleep();

      //check reprice
        var price1 = sku1[3].element(by.tagName('strong')).getText();
        expect(price1).toContain('750.00 EGP');

        var price2 = sku1[3].element(by.tagName('del')).getText();
        expect(price2).toContain('1,500.00 EGP');

      //change quantity to 20
        sku1[3].element(by.css('.ui-spinner-input')).sendKeys(protractor.Key.BACK_SPACE);
        sku1[3].element(by.css('.ui-spinner-input')).sendKeys(protractor.Key.BACK_SPACE);
        sku1[3].element(by.css('.ui-spinner-input')).sendKeys("20");
        element(by.className('product-sec1 row')).click();
        sleep();

      //check reprice
        var price1 = sku1[3].element(by.tagName('strong')).getText();
        expect(price1).toContain('800.00 EGP');

        var price2 = sku1[3].element(by.tagName('del')).getText();
        expect(price2).toContain('2,000.00 EGP');

      //change quantity to 100
        sku1[3].element(by.css('.ui-spinner-input')).sendKeys(protractor.Key.BACK_SPACE);
        sku1[3].element(by.css('.ui-spinner-input')).sendKeys(protractor.Key.BACK_SPACE);
        sku1[3].element(by.css('.ui-spinner-input')).sendKeys("100");
        element(by.className('product-sec1 row')).click();
        sleep();

      //check reprice
        var price1 = sku1[3].element(by.tagName('strong')).getText();
        expect(price1).toContain('10,000.00 EGP');

    });


    });
});