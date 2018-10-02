describe('B2B Quick View', function () {

    require('./B2BLogin.test.js');

    var sleep = function () {
        browser.sleep(5000);
      };
    
      beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://152.109.212.24:9090/B2B-FE/#/?page=0&pageSize=12');
      }); 

    it('Test Case:Quick View', function () {
        //search by name
        element(by.className('search')).element(by.tagName('input')).sendKeys('64220726');
        element(by.className('search')).element(by.tagName('button')).click();
        sleep();

        //check name of returened sku is the name you know 
        var prodName = element(by.className('row-product')).getText();
        expect(prodName).toContain('شاى ليبتون نكهات');


        //click on Quick view
        element(by.className('text')).click();
        sleep();

        //check on parcode = 123456
        element.all(by.tagName('li')).then(function(val){
          var code = val[38].getText();
          expect(code).toContain('123456');
        });

        //check on Company code
        element.all(by.tagName('li')).then(function(val){
          var code = val[39].getText();
          expect(code).toContain('64220726');
        });

        //check on pices per case
        element.all(by.tagName('li')).then(function(val){
          var code = val[40].getText();
          expect(code).toContain('1');
        });

        //check on size
        element.all(by.tagName('li')).then(function(val){
          var code = val[41].getText();
          expect(code).toContain('LIPTON YL BAGS REGULAR ORGNL 50S');
        });

        //check on Description
        var desc = element(by.className('main-margin desc2')).getText();
        expect(desc).toContain('شاى ليبتون نكهات');

        //check on promotion 
        element.all(by.tagName('li')).then(function(val){
          var code = val[36].getText();
          expect(code).toContain('الحق العرض فقط لك');
        });
        element.all(by.tagName('li')).then(function(val){
            var code = val[37].getText();
            expect(code).toContain('عرض مدهش');
        });

        //price after promotion
        var price = element(by.className('price price2 no-margin')).getText();
        expect(price).toContain('45.00 EGP');

        //price pre promotion
        var price = element(by.tagName('del')).getText();
        expect(price).toContain('100.00 EGP');
  });

});