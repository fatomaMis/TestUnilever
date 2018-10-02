describe('B2B User Login', function () {

    var sleep = function () {
        browser.sleep(3000);
      };
      
      beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://152.109.212.24:9090/B2B-FE/#/?page=0&pageSize=12');
      });

      it('Test Case(1):User Login', function () {
        element(by.className('header__user-actions no-margin')).click();
        sleep();

        element(by.id('username')).sendKeys('cust1');
        element(by.name('password')).sendKeys('123123');
        element(by.className('btn mat-button btn-primary btn-auth')).click();
        sleep();  

        //Name in successful message
        var validationMsg = element(by.className('toast-container')).getText();
        expect(validationMsg).toContain('Grocery- Alexandria_test Alexandria أهلا');

        //Name is successful in website
        var validationName = element(by.className('header__user-actions no-margin')).element(by.tagName('a')).getText();
        expect(validationName).toContain('Grocery- Alexandria_test Alexandria');

      });
      
});
