describe('B2B RDD', function () {

    require('./B2BLogin.test.js');

    var sleep = function () {
        browser.sleep(5000);
      };
    
      beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://152.109.212.24:9090/B2B-FE/#/?page=0&pageSize=12');
      });


      it('Test Case:RDD', function () {        
        //click on product name
        element.all(by.className('product_title')).then(function(option){
            option[3].click();
            sleep();
          });
        
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


        //click on button card icon show 
        sleep();
        element(by.className('header__user-actions no-margin')).element(by.className('minicart')).click();
        sleep();

        //Click on calendar icon
        element(by.className('mat-icon-button')).click();
        sleep();

        //get available date 
        var today = new Date();
        var dd = today.getDate();
        var available = dd + 4 ; 

        //select active date 
        element.all(by.className('mat-calendar-body-cell-content')).then(function(op){
            op[available-1].click();
            sleep();
        });

        //Check on Day you selected is set in Requested Delivery Date text box
        var checkDate = element(by.className('date-selector')).element(by.tagName('input')).getAttribute('value');
        expect(checkDate).toContain(available);
        sleep();
      });

    });