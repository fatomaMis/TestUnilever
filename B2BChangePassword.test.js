describe('B2B change password', function () {

    require('./B2BLogin.test.js');

    var sleep = function () {
        browser.sleep(3000);
    };
      
    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://152.109.212.24:9090/B2B-FE/#/?page=0&pageSize=12');
    });

    it('Test Case:Change Password', function () {
        //click change password button 
        element(by.className('header__user-actions no-margin')).element(by.tagName('a')).click();
        sleep();
        element.all(by.className('user-account-options')).then(function(op){
            op[1].click();
            sleep();
        });
        sleep();

        //change old password by new password
        element(by.id('oldPassword')).sendKeys('123456');
        element(by.css('input[name=newPassword]')).sendKeys('123123');
        element(by.css('input[name=confirmedPassword]')).sendKeys('123123');
        element(by.className('btn mat-button btn-primary btn-auth')).click();
        sleep();

        //check changing done successfully
        element(by.className('toast-container')).element(by.tagName('div'));
        var validationMsg = element(by.className('toast-container')).element(by.tagName('div')).getText();
        expect(validationMsg).toMatch(/(Success!|Password Changed successfully!)/);

        //logout
        element(by.className('header__user-actions no-margin')).element(by.tagName('a')).click();
        sleep();
        element.all(by.className('collection-item')).then(function(op){
            op[3].click();
            sleep();
        });
        sleep();

        //login button
        element(by.className('header__user-actions no-margin')).click();
        sleep();

        //login with new password
        element(by.id('username')).sendKeys('cust1');
        element(by.name('password')).sendKeys('123123');
        element(by.className('btn mat-button btn-primary btn-auth')).click();
        sleep();

        //Name in successful message
        element(by.className('toast-container')).element(by.tagName('div'));
        var validationMsg = element(by.className('toast-container')).element(by.tagName('div')).getText();
        expect(validationMsg).toContain('!Grocery- Alexandria_test Alexandria أهلا');
        sleep();

         //logout
         element(by.className('header__user-actions no-margin')).element(by.tagName('a')).click();
         sleep();
         element.all(by.className('collection-item')).then(function(op){
             op[3].click();
             sleep();
         });
         sleep();

         //login button
        element(by.className('header__user-actions no-margin')).click();
        sleep();

        //login with old password
        element(by.id('username')).sendKeys('cust1');
        element(by.name('password')).sendKeys('123456');
        element(by.className('btn mat-button btn-primary btn-auth')).click();
        sleep();

        //check error msg
        element(by.className('toast-container')).element(by.tagName('div'));
        var validationMsg = element(by.className('toast-container')).element(by.tagName('div')).getText();
        expect(validationMsg).toMatch(/(Error!| كلمه مرور غير صحيحة !)/);

    });

    });