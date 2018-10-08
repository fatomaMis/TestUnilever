describe('B2B Promotion3', function () {

    var sleep = function () {
        browser.sleep(5000);
      };
    
      beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://152.109.212.24:9090/B2B-FE/#/?page=0&pageSize=12');
      });

      it('Test Case :Promotion3', function () {
        //login 1
        element(by.className('header__user-actions no-margin')).click();
        sleep();
        element(by.id('username')).sendKeys('cust1');
        element(by.name('password')).sendKeys('123123');
        element(by.className('btn mat-button btn-primary btn-auth')).click();
        sleep();

       //search for item 64221022
       element(by.className('search')).element(by.tagName('input')).sendKeys('64221022');
       element(by.className('search')).element(by.tagName('button')).click();
       sleep();

        //check on prepromotion
        var price1 = element(by.tagName('strong')).getText();
        expect(price1).toContain('18.00 EGP');

        //check original price
       var price2 =  element(by.tagName('del')).getText();
       expect(price2).toContain('20.00 EGP');

       //click on product name
       element(by.className('product_title')).click();
       sleep();

       //switch browser tab
       browser.getAllWindowHandles().then(function(handles) {
           var newTabHandle = handles[1];
           browser.switchTo().window(newTabHandle)
       });

       //price after promotion
      var price = element(by.className('price price2 no-margin')).getText();
      expect(price).toContain('18.00 EGP');

      //price pre promotion
      var priceDel = element(by.tagName('del')).getText();
      expect(priceDel).toContain('20.00 EGP');

      //logout 1
      element(by.className('header__user-actions no-margin')).element(by.tagName('a')).click();
      sleep();
      element.all(by.className('collection-item')).then(function(op){
          op[3].click();
          sleep();
          sleep();
      });

      
        //login 2
        element(by.className('header__user-actions no-margin')).click();
        sleep();
        element(by.id('username')).sendKeys('cust2');
        element(by.name('password')).sendKeys('654321');
        element(by.className('btn mat-button btn-primary btn-auth')).click();
        sleep();

       //search for item 64221022
       element(by.className('search')).element(by.tagName('input')).sendKeys('64221022');
       element(by.className('search')).element(by.tagName('button')).click();
       sleep();

        //check on prepromotion
        var price1 = element(by.tagName('strong')).getText();
        expect(price1).toContain('18.00 EGP');

        //check original price
        var price2 =  element(by.tagName('del')).getText();
        expect(price2).toContain('20.00 EGP');

        //click on product name
      element(by.className('product_title')).click();
      sleep();

      //switch browser tab
      browser.getAllWindowHandles().then(function(handles) {
          var newTabHandle1 = handles[2];
          browser.switchTo().window(newTabHandle1);
      });

       //price after promotion
     var priceUser2 = element(by.className('price price2 no-margin')).getText();
     expect(priceUser2).toContain('18.00 EGP');

     //price pre promotion
     var priceUserDel = element(by.tagName('del')).getText();
     expect(priceUserDel).toContain('20.00 EGP');

    //logout 2
    element(by.className('header__user-actions no-margin')).element(by.tagName('a')).click();
    sleep();
    element.all(by.className('collection-item')).then(function(op){
        op[3].click();
        sleep();
        sleep();
    });


    //login 3
    element(by.className('header__user-actions no-margin')).click();
    sleep();
    element(by.id('username')).sendKeys('cust3');
    element(by.name('password')).sendKeys('654321');
    element(by.className('btn mat-button btn-primary btn-auth')).click();
    sleep();

    //search for item 64221022
    element(by.className('search')).element(by.tagName('input')).sendKeys('64221022');
    element(by.className('search')).element(by.tagName('button')).click();
    sleep();

    //check on prepromotion
    var price11 = element(by.tagName('strong')).getText();
    expect(price11).toContain('18.00 EGP');

    //check original price
    var priceDel =  element(by.tagName('del')).getText();
    expect(priceDel).toContain('20.00 EGP');

    //click on product name
    element(by.className('product_title')).click();
    sleep();

    //switch browser tab
    browser.getAllWindowHandles().then(function(handles) {
        var newTabHandle1 = handles[3];
        browser.switchTo().window(newTabHandle1);
    });

    //price after promotion
    var priceUser2 = element(by.className('price price2 no-margin')).getText();
    expect(priceUser2).toContain('18.00 EGP');

    //price pre promotion
    var priceUserDel = element(by.tagName('del')).getText();
    expect(priceUserDel).toContain('20.00 EGP');

    //logout 3
    element(by.className('header__user-actions no-margin')).element(by.tagName('a')).click();
    sleep();
    element.all(by.className('collection-item')).then(function(op){
        op[3].click();
        sleep();
    });


      });
    });