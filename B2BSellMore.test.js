describe('B2B Sell More', function () {

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

    it('Test Case:Sell More', function () {
        //category item in the upper menu (بيع اكثر)
        element(by.xpath('//a[contains(text(), "بيع اكتر")]')).click();

        //check on only one link is exist
        var count = 0 ; 
        if(element(by.css('a[href=#/sell-more]'))){
             count = count+1 ;
        }
        expect(count).toEqual(1);

        //check on name of link is (تنظيم الرف - Hts)
        var linkName = element(by.xpath('//a[contains(text(), "تنظيم الرف - Hts")]')).getText();
        expect(linkName).toContain('تنظيم الرف - Hts') ;
        
        //click on link
        element(by.xpath('//a[contains(text(), "تنظيم الرف - Hts")]')).click();
        sleep();

        //check on URL 
        expect(browser.getCurrentUrl()).toContain("#/sell-more");
    
        //check on text in article
        var text = element(by.className('WordSection1')).element(by.tagName('p')).getText();
        expect(text).toContain('ليبتون هي العلامة التجارية الشاي الأكثر مبيعا في العالم ، وقد تم تأسيسها لأكثر من 100 عام ومتاحة في أكثر من 150 دولة.');
    });
});