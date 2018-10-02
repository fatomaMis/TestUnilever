describe('B2B Add To Card', function () {

    require('./B2BLogin.test.js');

    var sleep = function () {
        browser.sleep(5000);
      };
    
      beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://152.109.212.24:9090/B2B-FE/#/?page=0&pageSize=12');
      });      
      
      it('Test Case:Add To Card -inside- ', function () {
        //search by name
        element(by.className('search')).element(by.tagName('input')).sendKeys('64220726');
        element(by.className('search')).element(by.tagName('button')).click();
        sleep();

        //click on product name
        element(by.className('product_title')).click();
        sleep();

        //switch browser tab
        browser.getAllWindowHandles().then(function(handles) {
          var newTabHandle = handles[1];
          browser.switchTo().window(newTabHandle)
        });

        //put 10 items 
        element(by.css('.ui-spinner-input')).sendKeys(protractor.Key.BACK_SPACE);
        element(by.css('.ui-spinner-input')).sendKeys("10");
        element(by.className('item-price')).click();
        sleep();

        //add to card button 
        element.all(by.css('.mat-button')).then(function(options){
          options[1].click();
          sleep();
        });

        //Successful message appears after “Add to cart”.
        var successMsg = element(by.className('toast-message ng-star-inserted')).getText();
        expect(successMsg).toContain('تمت إضافة الصنف/الاصناف إلى سلة التسوق بنجاح');


        //click on button card icon show 
        sleep();
        element(by.className('header__user-actions no-margin')).element(by.className('minicart')).click();
        sleep();

         //check on quantity of item SKU1 (10)
         element.all(by.className('ui-spinner-input')).then(function(op){
          expect(op[0].getAttribute('value')).toEqual('10');
          });
        
      });

    });