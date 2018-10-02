describe('B2B clear cart', function () {
    require('./B2BLogin.test.js');
     
     var sleep = function () {
         browser.sleep(5000);
       };
     
       beforeEach(function () {
         browser.waitForAngularEnabled(false);
         browser.get('http://152.109.212.24:9090/B2B-FE/#/?page=0&pageSize=12');
       });
 
       it('Test Case:clear cart ', function () {
        //Select SKU2 12311 and set quantity to it
        element.all(by.css('.ui-spinner-input')).then(function(sku2){
          sku2[1].sendKeys(protractor.Key.BACK_SPACE);
          sku2[1].sendKeys("10");
        });
        element(by.className('product-sec1 row')).click();
        sleep();

        //scroll up
        browser.executeScript('window.scrollTo(0,200);').then(function() {
          browser.sleep(3000);
        }).then(function() {
            browser.executeScript('window.scrollTo(0,0);');
        });


        //add to card button 
        element.all(by.css('.mat-button')).then(function(options){
          options[1].click();
          sleep();
        });
        
        //open cart screen 
        sleep();
        element(by.className('header__user-actions no-margin')).element(by.className('minicart')).click();
        sleep();

        //remove all button
        element.all(by.className('mat-button-wrapper')).then(function(close){
          close[1].click();
          sleep();
        });
        var yes = element(by.className('modal-dialog')).element(by.tagName('button')).getAttribute('نعم');
        yes.click();
        sleep();

        //check on msg of removing
        var successMsg = element(by.className('toast-message ng-star-inserted')).getText();
        expect(successMsg).toContain('تم مسح محتوى السلة بنجاح.');
        sleep();

        //item = 0
        var items = element(by.className('margin-bottom30')).element(by.tagName('tbody')).all(by.tagName('tr'));
        expect(items.count()).toEqual(0); 

        //سله المشتريات فارغة
        var empty = element(by.className('content')).getText();
        expect(empty).toContain('سله المشتريات فارغة');
        sleep();

        browser.get('http://152.109.212.24:9090/B2B-FE/#/?page=0&pageSize=12');
        
        //click on button card icon show 
        sleep();
        element(by.className('header__user-actions no-margin')).element(by.className('minicart')).click();
        sleep();
        
        //check on number of remaning skus (1)
        var items = element(by.className('margin-bottom30')).element(by.tagName('tbody')).all(by.tagName('tr'));
        expect(items.count()).toEqual(0);

       });


    });