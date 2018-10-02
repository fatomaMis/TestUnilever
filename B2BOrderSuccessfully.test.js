describe('B2B Order Success', function () {

    require('./B2BLogin.test.js');
    require('./B2BAddToCard.test.js');

    var sleep = function () {
        browser.sleep(5000);
      };
    
      beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://152.109.212.24:9090/B2B-FE/#/?page=0&pageSize=12');
      });

    //order done successfully
    it('Test Case(5):order done successfully', function () {
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

        //write comment 
        element(by.css('textarea[ng-model=userComment]')).sendKeys('i want this product , please send it to me as fast as it can');
        sleep();

        //press Place order button
        element(by.className('btn-block')).click();
        sleep();

        //Successful message appears after “order created successfully”.
        var successMsg = element(by.className('toast-message ng-star-inserted')).getText();
        expect(successMsg).toContain('تم تأكيد الطلب بنجاح');
        sleep();

      });



});
