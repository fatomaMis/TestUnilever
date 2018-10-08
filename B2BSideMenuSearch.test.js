//search as a guest in check boxes
describe('B2B Side Menu Search Product', function () {

    var sleep = function () {
        browser.sleep(5000);
      };
    
    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://152.109.212.24:9090/B2B-FE/#/?page=0&pageSize=12');
        element(by.className('country-select')).click();
        sleep();
        element(by.className('flag flag-lb')).click();
        sleep();
    });

    it('Test Case(4):search with 2 checkbox', function () {
        element.all(by.className('mat-checkbox-layout')).then(function(op){
            op[1].click();
        });
        sleep();

        element(by.xpath('//span[contains(text(), "صانعى الوجبات")]')).click();;
        sleep();

        //check1 , search on number of returned items = 8
        var items = element.all(by.className('item-product_thumbnail'));
        expect(items.count()).toEqual(8);         
    });


    });