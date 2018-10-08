describe('B2B Keep Language', function () {
     
    var sleep = function () {
        browser.sleep(5000);
    };
    
    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://152.109.212.24:9090/B2B-FE/#/?page=0&pageSize=12');
    });

    it('Test Case:Keep Language', function () {
        //login button
        element(by.className('header__user-actions no-margin')).click();
        sleep();

        //login with the same user 
        element(by.id('username')).sendKeys('cust1');
        element(by.name('password')).sendKeys('123123');
        element(by.className('btn mat-button btn-primary btn-auth')).click();
        sleep();

        //change lang to arabic
        element(by.className('lang-select')).click();
        sleep();
        element(by.cssContainingText('.white-forground','English')).click();
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

        //login with the same user 
        element(by.id('username')).sendKeys('cust1');
        element(by.name('password')).sendKeys('123123');
        element(by.className('btn mat-button btn-primary btn-auth')).click();
        sleep();

        //check on lang
        var lang = element(by.className('lang-select')).getText();
        expect(lang).toContain('English');

        //check on name of code 64220726
        var prodName = element(by.className('row-product')).getText();
        expect(prodName).toContain('LIPTON TEA SPICES CONT PR 72X50TBX2G');



    });

    });