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
        //browser.debug();    
        browser.click('#contact-us');
        var tabIds = browser.getTabIds(); // Get Id's of tabs that are open
        console.log(tabIds); // Print available tabs
        browser.switchTab(tabIds[1]);  //Use index 1 because the homepgae is 0
        var contactTitle = browser.getTitle(); // Create a varible for title to run a assertion against
        console.log(contactTitle);
        expect(contactTitle).to.equal('WebDriver | Contact Us'); //Title assertion
        var url = browser.getUrl(); //Get url
        expect(url).to.include('Contact-Us', 'URL mismtach'); //Assert the url contain 'contact us'
        browser.pause(3000);
        browser.close();
    });

    it("Check that the Login button opens the Login Portal page", function(){
        browser.url('/');
        var title = browser.getTitle();
        title.should.equal('WebDriverUniversity.com');
        browser.click('#login-portal');
        var tabIds = browser.getTabIds();
        console.log(tabIds); // Print available tabs
        browser.switchTab(tabIds[1]);  //Use index 1 because the homepgae is 0
        var logintTitle = browser.getTitle(); // Create a varible for title to run a assertion against
        expect(loginTitle).to.equal('WebDriver | Login-Portal'); //Title assertion
        var url = browser.getUrl(); //Get url
        expect(url).to.include('Login-Portal', 'URL mismtach'); //Assert the url contain 'login'
        browser.pause(3000);
    });
});

