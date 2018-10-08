describe('B2B Search Product', function () {
    require('./B2BLogin.test.js');
    var sleep = function () {
        browser.sleep(3000);
      };
      beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://152.109.212.24:9090/B2B-FE/#/?page=0&pageSize=12');
      });

      it('Test Case(4):side search menu login user', function () {
        element.all(by.className('mat-checkbox-layout')).then(function(op){
            op[2].click();
        });
        sleep();

        element(by.xpath('//span[contains(text(), "صانعى الوجبات")]')).click();;
        sleep();

         //check1 , search on number of returned items = 2
         var items = element.all(by.className('item-product_thumbnail'));
         expect(items.count()).toEqual(2);         

    });


    });