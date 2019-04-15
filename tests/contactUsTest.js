beforeEach(function(){
    browser.url('/Contact-Us/contactus.html' );
});

describe('Test Contact Us form on Webdriveruniveristy.com', function(){
    beforeEach(function(){
        console.log('We are inside the describe block');
    });
    it('Should be able to submit a sucessful submission via contact us form', function(done){
        browser.setValue("[name='first_name']", 'Pierre');
        browser.setValue("[name='last_name']", 'Goldstein');
        browser.setValue("[name='email']", 'pierre.goldstein@gmail.com');
        browser.setValue("[name='message']",'Bizzaro I\'m helping');
        browser.click("[type='submit']");
        
        var sucessfulContactConfirmation = browser.isExisting("#contact_reply h1");
        expect(sucessfulContactConfirmation, "Sucessful submission Message does not exist").to.be.true;

        var sucessfulSubmission = browser.getText("#contact_reply h1");
        expect(sucessfulSubmission).to.equal('Thank You for your Message!');
    });
    it('Should not be able to submit a sucessful submission via contact us form as all fields are required', function(done){
        browser.setValue("[name='first_name']", 'Pierre');
        browser.setValue("[name='last_name']", 'Goldstein');
        browser.setValue("[name='email']", 'pierre.goldstein@gmail.com');
        browser.click("[type='submit']");
       
        var sucessfulContactConfirmation = browser.isExisting("#contact_reply h1");
        expect(sucessfulContactConfirmation, "Sucessful submission Message does not exist").to.be.false;
    });
    it('Should not be able to submit a sucessful submission via contact us form as all fields are required', function(done){
        browser.setValue("[name='first_name']", 'Pierre');
        browser.setValue("[name='email']", 'pierre.goldstein@gmail.com');
        browser.click("[type='submit']");
        
        var sucessfulContactConfirmation = browser.isExisting("#contact_reply h1");
        expect(sucessfulContactConfirmation, "Sucessful submission Message does not exist").to.be.false;
    });
    it('Should not be able to submit a sucessful submission via contact us form as all fields are required', function(done){
        browser.setValue("[name='first_name']", 'Pierre');
        browser.setValue("[name='last_name']", 'Goldstein');
        browser.click("[type='submit']");
        
        var errorText = browser.getText('body');
        expect(errorText).to.include('Error: all fields are required');

        var errorText = browser.isVisible('body');
        expect(errorText, 'Error message is not visible').to.be.true;
    });
});