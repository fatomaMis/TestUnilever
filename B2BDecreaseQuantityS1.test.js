describe('B2B Decrease quantity', function () {

    require('./B2BLogin.test.js');
    
    
    var sleep = function () {
        browser.sleep(5000);
      };
    
      beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://152.109.212.24:9090/B2B-FE/#/?page=0&pageSize=12');
      });

       //Home Screen
    it('Test Case: decrease', function () {
        //search by name
        element(by.className('search')).element(by.tagName('input')).sendKeys('شاى ليبتون نكهات');
        element(by.className('search')).element(by.tagName('button')).click();
        sleep();

        //icrease + button
        element.all(by.css('.mat-button')).then(function(options){
          options[4].click();
          sleep();
          options[4].click();
          sleep();
          options[3].click();
          sleep();
         
        //check Value of quantity box equals 2
        var num =  element(by.className('ui-spinner-input')).getAttribute('value');
         expect(num).toEqual('1');
         sleep();
        });
        
    });

    });