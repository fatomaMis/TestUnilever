describe('B2B Remove Item', function () {
   require('./B2BLogin.test.js');
    
    var sleep = function () {
        browser.sleep(5000);
      };
    
      beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://152.109.212.24:9090/B2B-FE/#/?page=0&pageSize=12');
      });

      it('Test Case:remove item ', function () {
        //Select sku1 64220726 set quantity to it
        element.all(by.css('.ui-spinner-input')).then(function(sku1){
          sku1[0].sendKeys(protractor.Key.BACK_SPACE);
          sku1[0].sendKeys("10");
        });
        element(by.className('product-sec1 row')).click();
        sleep();
       
        //Select sku2 12311 and set quantity to it
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

        //remove sku 
        element.all(by.className('mat-button-wrapper')).then(function(close){
            close[1].click();
        });
        sleep();
        
        //check on msg of removing
        var successMsg = element(by.className('toast-message ng-star-inserted')).getText();
        expect(successMsg).toContain('تمت مسح الصنف بنجاح.');


        //check on number of remaning skus (1)
        var items = element(by.className('margin-bottom30')).element(by.tagName('tbody')).all(by.tagName('tr'));
        expect(items.count()).toEqual(1);            


         //check on name of remaning skus (Whitening Cream Gold2)
         var itemName = element(by.className('margin-bottom30')).element(by.tagName('tbody')).all(by.tagName('td'));
        expect(itemName.getText()).toContain('Whitening Cream Gold2');            

        browser.get('http://152.109.212.24:9090/B2B-FE/#/?page=0&pageSize=12');
        
        //click on button card icon show 
        sleep();
        element(by.className('header__user-actions no-margin')).element(by.className('minicart')).click();
        sleep();
        
        //check on number of remaning skus (1)
        var items = element(by.className('margin-bottom30')).element(by.tagName('tbody')).all(by.tagName('tr'));
        expect(items.count()).toEqual(1);            


         //check on name of remaning skus (Whitening Cream Gold2)
         var itemName = element(by.className('margin-bottom30')).element(by.tagName('tbody')).all(by.tagName('td'));
        expect(itemName.getText()).toContain('Whitening Cream Gold2');            

    });
  });