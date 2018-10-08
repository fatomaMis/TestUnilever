describe('B2B Decrease quantity', function () {

    require('./B2BLogin.test.js');
    require('./B2BAddToCard.test.js');

    
    var sleep = function () {
        browser.sleep(5000);
      };
    
    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://152.109.212.24:9090/B2B-FE/#/?page=0&pageSize=12');
     });

    // Cart Screen
    it('Test Case: decrease', function () {
        //click on button card icon show 
        sleep();
        element(by.className('header__user-actions no-margin')).element(by.className('minicart')).click();
        sleep();

        //click on + button
        element.all(by.css('.mat-button')).then(function(options){
          options[2].click();
          sleep();
          options[2].click();
          sleep();
          options[1].click();
          sleep();

         //check Value of quantity box equals 2
         var num =  element(by.className('ui-spinner-input')).getAttribute('value');
         expect(num).toEqual('21');
        });


    });

    });