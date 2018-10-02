describe('B2B Search Product', function () {
    require('./B2BLogin.test.js');
    var sleep = function () {
        browser.sleep(3000);
      };
      beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://152.109.212.24:9090/B2B-FE/#/?page=0&pageSize=12');
      });

      it('Test Case(3):Upper search menu', function () {
        //category item in the upper menu (Beauty)
        element(by.cssContainingText('.cat-name','Beauty')).click();
        sleep();
        //sub-categories items (Skin Care)
        element(by.xpath('//a[contains(text(), "Skin Care")]')).click();
        sleep();
        //search on number of returned items under subcategory (1)
        var items = element.all(by.className('col-xl-3'));
        expect(items.count()).toEqual(1); 
    });

});