beforeEach(function(){
    browser.url('/Contact-Us/contactus.html' );
});

describe('Test Contact Us form on Webdriveruniveristy.com', function(){
    beforeEach(function(){
        console.log('We are insode the describe block');
    });
    it('Should be able to submit a sucessful submission via contact us form', function(done){
        browser.setValue("[name='first_name']", 'Pierre');
        browser.setValue("[name='last_name']", 'Goldstein');
        browser.setValue("[name='email']", 'pierre.goldstein@gmail.com');
        browser.setValue("[name='message']",'Bizzaro I\'m helping');
        browser.click("[type='submit']");
        // [name=first_name]
        // [name=last_name]
        // [name=email]
        // [type='submit']
        // [type='reset']
    });
    it('Should not be able to submit a sucessful submission via contact us form as all fields are required', function(done){
        browser.setValue("[name='first_name']", 'Pierre');
        browser.setValue("[name='last_name']", 'Goldstein');
        browser.setValue("[name='email']", 'pierre.goldstein@gmail.com');
        browser.click("[type='submit']");
    });
    it('Should not be able to submit a sucessful submission via contact us form as all fields are required', function(done){
        browser.setValue("[name='first_name']", 'Pierre');
        browser.setValue("[name='email']", 'pierre.goldstein@gmail.com');
        browser.click("[type='submit']");
    });
    it('Should not be able to submit a sucessful submission via contact us form as all fields are required', function(done){
        browser.setValue("[name='first_name']", 'Pierre');
        browser.setValue("[name='last_name']", 'Goldstein');
        browser.click("[type='submit']");
    });
});