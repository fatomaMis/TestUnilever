describe('B2B Upper search menu', function () {

    var sleep = function () {
        browser.sleep(3000);
      };
    
      beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://152.109.212.24:9090/B2B-FE/#/?page=0&pageSize=12');
        element(by.className('country-select')).click();
        sleep();
        element(by.className('flag flag-lb')).click();
        sleep();
    });

    it('Test Case(3):Upper search menu', function () {
        //category item in the upper menu (Beauty)
        element(by.cssContainingText('.cat-name','Beauty')).click();
        sleep();
        //sub-categories items (Skin Care)
        element(by.xpath('//a[contains(text(), "Skin Care")]')).click();
        sleep();
        //search on number of returned items under subcategory (4)
        var items = element.all(by.className('col-xl-3'));
        expect(items.count()).toEqual(4); 
    });

    });