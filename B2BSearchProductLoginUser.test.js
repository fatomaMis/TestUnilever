
//search as a login user
describe('B2B Search Product', function () {

    require('./B2BLogin.test.js');

    var sleep = function () {
        browser.sleep(3000);
      };
    
      beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://152.109.212.24:9090/B2B-FE/#/?page=0&pageSize=12');
      });

// //search by code
// 	it('Test Case(2):search by code', function () {
//         element(by.className('search')).element(by.tagName('input')).sendKeys('64220726');
//         element(by.className('search')).element(by.tagName('button')).click();
//         sleep();

//         //check1 , search on number of returned items under subcategory (1)
//         var items = element.all(by.className('item-product_thumbnail'));
//         expect(items.count()).toEqual(1);            
//          sleep();

//         //check2 , click on returned sku and check that its code = code you typed in search 
//         element(by.className('item-product_thumbnail')).click();
//         sleep();
//         var codeNum = element(by.cssContainingText('.ng-star-inserted', ': 64220726')).getText();
//         expect(codeNum).toContain('64220726');
// 		sleep();

//         //check3 , check name of returened sku is the name you know 
//         var prodName = element(by.className('row-product')).getText();
//         expect(prodName).toContain('شاى ليبتون نكهات');
// 		sleep();

//     });

    
// //search by name
//     it('Test Case(2):search by name', function () {
//         element(by.className('search')).element(by.tagName('input')).sendKeys('شاى ليبتون نكهات');
//         element(by.className('search')).element(by.tagName('button')).click();
//         sleep();
        
//         //check1 , search on number of returned items under subcategory (1)
//         var items = element.all(by.className('item-product_thumbnail'));
//         expect(items.count()).toEqual(1);            
//          sleep();

//         //check2 , name of returned item = name you typed in search
//         var prodName = element(by.className('row-product')).getText();
//         expect(prodName).toContain('شاى ليبتون نكهات');
// 		    sleep();
//     });


    //search by brand name
    it('Test Case(2):search by brand name', function () {
        element(by.className('search')).element(by.tagName('input')).sendKeys('بلو باند');
        element(by.className('search')).element(by.tagName('button')).click();
        sleep();

        //check1 , search on number of returned items under subcategory (1)
        var items = element.all(by.className('item-product_thumbnail'));
        expect(items.count()).toEqual(1);            
         sleep();
    });

});