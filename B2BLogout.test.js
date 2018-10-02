describe('B2B User Logout', function () {

    require('./B2BLogin.test.js');

    var sleep = function () {
        browser.sleep(3000);
    };
      
    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://152.109.212.24:9090/B2B-FE/#/?page=0&pageSize=12');
    });

    it('Test Case:Logout', function () {
        //logout
        element(by.className('header__user-actions no-margin')).element(by.tagName('a')).click();
        sleep();
        element.all(by.className('collection-item')).then(function(op){
            op[3].click();
            sleep();
        });

        //check Goodbye user name message
        var validationMsg = element(by.className('toast-container')).getText();
        expect(validationMsg).toContain('!HTS- Alexandria_test Alexandria وداعا');
        

        //check User name does not appear
        var validationName = element(by.className('header__user-actions no-margin')).getText();
        expect(validationName).not.toContain('Hts- Alexandria_test Alexandria');

        //Log In link appears
        var validationName = element(by.className('header__user-actions no-margin')).getText();
        expect(validationName).toContain('تسجيل الدخول');
        sleep();

        //Get any item and check existing of message تسجيل الدخول لإظهار الأسعار
        element(by.className('item-product')).click();
        sleep();
        var text = element(by.className('col-lg-12')).getText();
        expect(text).toContain('تسجيل الدخول لإظهار الأسعار');
        sleep();

        //close window of sku
        element(by.className('close-icon')).click();
        sleep();

        //Click on Cart screen and received message "Login to View Cart"
        element(by.className('header__user-actions no-margin')).element(by.className('minicart')).click();
        sleep();
        var text2 = element(by.tagName('p')).getText();
        expect(text2).toContain('يرجي تسجيل الدخول لمشاهدة سله المشتريات.');
        sleep();


    });

});