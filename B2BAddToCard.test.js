describe('B2B Add To Card', function () {

    require('./B2BLogin.test.js');

    var sleep = function () {
        browser.sleep(5000);
      };
    
      beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://152.109.212.24:9090/B2B-FE/#/?page=0&pageSize=12');
      });

      it('Test Case(5):Add To Card -outside- ', function () {
        //search by name
        element(by.className('search')).element(by.tagName('input')).sendKeys('شاى ليبتون نكهات');
        element(by.className('search')).element(by.tagName('button')).click();
        sleep();

        //check2 , name of returned item = name you typed in search  
        var prodName = element(by.className('product_title')).getText();
        expect(prodName).toContain('شاى ليبتون نكهات');
        sleep();

        //put quantity of item + button
        element.all(by.css('.mat-button')).then(function(options){
          options[4].click();
          sleep();
        });

        //validation Msg
        var msg = element(by.className('item-product_options')).element(by.tagName('p')).getText();
        expect(msg).toContain('اقل كميه 10 قطعه');
        sleep();

        //put 10 items 
        element(by.css('.ui-spinner-input')).sendKeys(protractor.Key.BACK_SPACE);
        element(by.css('.ui-spinner-input')).sendKeys("10");
        element(by.className('product-sec1 row')).click();
          sleep();

        //add to card button 
        element.all(by.css('.mat-button')).then(function(options){
          options[1].click();
          sleep();
        });

        //Successful message appears after “Add to cart”.
        var successMsg = element(by.className('toast-message ng-star-inserted')).getText();
        expect(successMsg).toContain('تمت إضافة الصنف/الاصناف إلى سلة التسوق بنجاح');
        sleep();
      });

    });


       

