describe('B2B Back Btn', function () {
    require('./B2BLogin.test.js');
     
    var sleep = function () {
        browser.sleep(5000);
    };
    
    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://152.109.212.24:9090/B2B-FE/#/?page=0&pageSize=12');
    });

    it('Test Case:back button ', function () {
    //Select sku1 64220726 and set 10 quantity to it
    element.all(by.css('.ui-spinner-input')).then(function(sku1){
        sku1[0].sendKeys(protractor.Key.BACK_SPACE);
        sku1[0].sendKeys("10");
        });
    element(by.className('product-sec1 row')).click();
    sleep();

    //Select sku2 12311 and set 15 quantity to it
    element.all(by.css('.ui-spinner-input')).then(function(sku2){
        sku2[1].sendKeys(protractor.Key.BACK_SPACE);
        sku2[1].sendKeys("15");
        });
    element(by.className('product-sec1 row')).click();
    sleep();

    //scroll up
    browser.executeScript('window.scrollTo(0,200);').then(function() {
        browser.sleep(3000);
    }).then(function() {
            browser.executeScript('window.scrollTo(0,0);');
    });
    sleep();

    //add to card button 
    element.all(by.css('.mat-button')).then(function(options){
    options[1].click();
    sleep();
    });

    //click on button card icon show 
    sleep();
    element(by.className('header__user-actions no-margin')).element(by.className('minicart')).click();
    sleep();

    //I AGREE TO THE TERMS AND CONDITIONS
    element(by.className('mat-checkbox-inner-container')).click();
    sleep();

    //Proceed to checkout button
    element(by.className('btn-block')).click();
    sleep();

    //click back button 
    element(by.className('mat-button-wrapper')).click();
    sleep();

    //check on quantity of item SKU1 (10)
    element.all(by.className('ui-spinner-input')).then(function(op){
        expect(op[1].getAttribute('value')).toEqual('10');
    });


    //check on quantity of item SKU2 (15)
    element.all(by.className('ui-spinner-input')).then(function(op){
    expect(op[0].getAttribute('value')).toEqual('15');
    });


    });

});