describe('B2B Terms and Conditions', function () {

    require('./B2BLogin.test.js');

    var sleep = function () {
        browser.sleep(5000);
      };
    
      beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://152.109.212.24:9090/B2B-FE/#/?page=0&pageSize=12');
      }); 

    it('Test Case:Terms and Conditions', function () {
        //search by name
        element(by.className('search')).element(by.tagName('input')).sendKeys('64220726');
        element(by.className('search')).element(by.tagName('button')).click();
        sleep();

        //put 10 items 
        element(by.css('.ui-spinner-input')).sendKeys(protractor.Key.BACK_SPACE);
        element(by.css('.ui-spinner-input')).sendKeys("10");
        element(by.className('row')).click();
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

        //click on الشروط والاحكام
        element(by.className('mat-checkbox-label')).element(by.tagName('a')).click();
        sleep();

        //switch browser tab
        browser.getAllWindowHandles().then(function(handles) {
            var newTabHandle = handles[1];
            browser.switchTo().window(newTabHandle)
        });

        //check on URL 
        expect(browser.getCurrentUrl()).toContain("#/legal-terms");

        //check on text in article
        var text = element(by.className('WordSection1')).element(by.tagName('span')).getText();
        expect(text).toContain('Legal');

        element.all(by.tagName('p')).then(function(statment){
           var text1 =  statment[1].getText();
            expect(text1).toContain('PLEASE READ THIS NOTICE CAREFULLY BEFORE USING THE SITE. IT REGULATES YOUR USE OF THE SITE AND ALL MATERIAL WITHIN IT.');
        });
    });
});