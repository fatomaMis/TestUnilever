describe('B2B Decrease quantity', function () {

    require('./B2BLogin.test.js');

    var sleep = function () {
        browser.sleep(5000);
      };
    
      beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://152.109.212.24:9090/B2B-FE/#/?page=0&pageSize=12');
      });

      //SKU details screen
    it('Test Case: decrease', function () {
        //search by name
        element(by.className('search')).element(by.tagName('input')).sendKeys('شاى ليبتون نكهات');
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

        //put quantity of item + button
        element.all(by.css('.mat-button')).then(function(options){
          options[3].click();
          sleep();
          options[3].click();
          sleep();
          options[2].click();
          sleep();
        });

        //check Value of quantity box equals 3
       var num =  element(by.className('ui-spinner-input')).getAttribute('value');
        expect(num).toEqual('2');
        sleep();
    
    });


    });