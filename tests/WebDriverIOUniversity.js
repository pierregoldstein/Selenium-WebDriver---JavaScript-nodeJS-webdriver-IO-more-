describe("Verify webdriveruniveristy links on homepage work correctly", function(){
    it("check that the Contact us button opens the Contact Us page", function(done){
        browser.setViewportSize({
    	        width: 1200,
    	        height: 800
            })  
        var title = browser.getTitle()
        console.log('Title is: ' + title);
            
        browser.click('#contact-us')
        browser.pause(3000)
    });

    it("check that the Login button opens the Login Portal page", function(){
        browser.click('#login-portal')
        var title = browser.getTitle()
        console.log('Title is: '+ title);
    });
});

