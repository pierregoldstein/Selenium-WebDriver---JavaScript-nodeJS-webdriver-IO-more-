describe("Verify webdriveruniveristy links on homepage work correctly", function(){
    it("check that the Contact us button opens the Contact Us page", function(done){
        browser.setViewportSize({
    	        width: 1200,
    	        height: 800
            })  
        browser.url('/');
        var title = browser.getTitle();
        expect(title).to.equal('WebDriverUniversity.com');
        console.log('Title is: '+title);
        browser.debug();    
        browser.click('#contact-us');
        browser.pause(3000);
    });

    it("Check that the Login button opens the Login Portal page", function(){
        browser.url('/');
        browser.click('#login-portal');
        var title = browser.getTitle();
        title.should.equal('WebDriverUniversity.com');
        console.log('Title is: '+ title);
        browser.pause(3000);
    });
});

