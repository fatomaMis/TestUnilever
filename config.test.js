exports.config = {
    directConnect: true,
     seleniumAddress: 'http://152.109.212.24:9090/B2B-FE/',
     specs: ['B2BLogout.test.js'],
   allScriptsTimeout: 110000,
   getPageTimeout: 100000,
   jasmineNodeOpts: {
       defaultTimeoutInterval: 900000
    },
    restartBrowserBetweenTests: false
};


//B2BLogin.test
//B2BSearchProduct.test
//B2BSearchProductLoginUser.test 
//B2BUpperMenuSearch.test
//B2BUpperMenuSearchLoginUser.test
//B2BSideMenuSearch.test
//B2BSideMenuSearchLoginUser.test
//B2BAddToCard.test
//B2BOrderSuccessfully.test 


//B2BChangePassword.test
//B2BLogout.test
//B2BIncreaseQuantityS1.test
//B2BIncreaseQuantityS2.test
//B2BIncreaseQuantityS3.test
//B2BDecreaseQuantityS1.test
//B2BDecreaseQuantityS2.test
//B2BDecreaseQuantityS3.test
//B2BChange-RDD.test


//B2BRemoveItem.test
//B2BClearCart.test
//B2BSaveChange.test
//B2BBackBtn.test
//B2BConversionPCsToCs.test
//B2BReprice.test
//B2BProductDetailsAddToCart.test
//B2BProductDetails.test
//B2BQuickView.test
//B2BSellMore.test
//B2BTerms-Conditions.test
//B2BChangeCountry.test
//B2BChangeLanguage.test