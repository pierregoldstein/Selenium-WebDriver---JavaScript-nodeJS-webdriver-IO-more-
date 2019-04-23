var ContactUs_Page = require('./contactUs_Page.js')
var request = require('sync-request'); //Load the sync request library

// browser.addCommand("submitDataViaContactUsForm", function(firstName, lastName, emailAddress, comments){
//     if(firstName){
//         browser.setValue("[name='first_name']", firstName);
//     }
//     if(lastName){
//         browser.setValue("[name='last_name']", lastName);
//     }
//     if(emailAddress){
//         browser.setValue("[name='email']", emailAddress);
//     }
//     if(comments){
//         browser.setValue("[name='message']", comments);
//     }
//     browser.click("[type='submit']");
// })

beforeEach(function () {
    browser.url('/Contact-Us/contactus.html');
});

describe('Test Contact Us form on Webdriveruniveristy.com', function () {
    var res = request('GET', 'http://jsonplaceholder.typicode.com/posts/1/comments'); //Create the variable to "GET" json data
    var contacUsDetails = JSON.parse(res.getBody().toString('utf8')); //Format the JSON data 

    //Phase 1 - Centralizing Selectors
    var firstNameLocator = "[name='first_name']";
    var lastNameLocator = "[name='last_name']";
    var emailAddressLocator = "[name='email']";
    var commentsLocator = "textarea";
    var successfulSubmissionLocator = '#contact_reply h1';
    var unsuccessfulSubmissionLocator = 'body';
    var submitButtonLocator = "#form_buttons .contact_button:nth-of-type(2)";
    //Phase 1 - Centralizing Selectors(end)

    //Phase 1 - Improving our existing code
    function setFirstName(firstName){
        // return browser.setValue(firstNameLocator, firstName);
    }
    function setLastName(lastName){
        // return browser.setValue(lastNameLocator, lastName);
    }
    function setEmailAddress(emailAddress){
        // return browser.setValue(emailAddressLocator, emailAddress);
    }
    function setComments(comments){
        // return browser.setValue(commentsLocator, comments);
    }
    function clickSubmitButton(){
        // return browser.click(submitButtonLocator);
    }
    function confirmSuccessfulSubmission(){
        var validateSubmissionHeader = browser.waitUntil(function(){
            return browser.getText(successfulSubmissionLocator) == 'Thank You for your Message!';
        }, 3000);
        expect(validateSubmissionHeader, 'Successful Submission Message does not Exist!').to.be.true;
    }
    function confirmUnsuccessfulSubmission(){
        var validateSubmissionHeader = browser.waitUntil(function(){
            return browser.getText(unsuccessfulSubmissionLocator) == 'Error: all fields are required';
        }, 3000);
        expect(browser.getText(unsuccessfulSubmissionLocator)).to.include('Error: all fields are required');
    } 

    // beforeEach(function () {
    //     console.log('We are inside the describe block');
    // });
    // contacUsDetails.forEach(function (contacUsDetails) {
    contacUsDetails.slice(0,5).forEach(function (contacUsDetails){ //Using the slice method to limit the number of request because the file is ginormous!!!
        it('Should be able to submit a sucessful submission via contact us form', function (done) { //it.only is used just to run this one test
            
            setFirstName(contacUsDetails.name);
            setLastName(contacUsDetails.name);
            setEmailAddress(contacUsDetails.email);
            setComments(contacUsDetails.body);
            clickSubmitButton();
            confirmSuccessfulSubmission();


            // browser.submitDataViaContactUsForm(contacUsDetails.name, contacUsDetails.name, contacUsDetails.email, contacUsDetails.body)
            //null can be used to pass in as a paramter if you need to pass in a blank field
            // browser.setValue("[name='first_name']", 'Pierre');
            // browser.setValue("[name='last_name']", 'Goldstein');
            // browser.setValue("[name='email']", contacUsDetails.email); //Updated info with parsed json data for email
            // browser.setValue("[name='message']", contacUsDetails.body); //Updated info with parsed json data for body
            // browser.click("[type='submit']");

            // var sucessfulContactConfirmation = browser.isExisting("#contact_reply h1");
            // expect(sucessfulContactConfirmation, "Sucessful submission Message does not exist").to.be.true;

            // var sucessfulSubmission = browser.getText("#contact_reply h1");
            // expect(sucessfulSubmission).to.equal('Thank You for your Message!');
        });
        it('Should not be able to submit a sucessful submission via contact us form as all fields are required', function (done) {
        
            setFirstName(contacUsDetails.name);
            setLastName(contacUsDetails.name);
            setEmailAddress(contacUsDetails.email);
            clickSubmitButton();
            confirmUnsuccessfulSubmission();
                
            // browser.setValue("[name='first_name']", 'Pierre');
            // browser.setValue("[name='last_name']", 'Goldstein');
            // browser.setValue("[name='email']", 'pierre.goldstein@gmail.com');
            // browser.click("[type='submit']");
    
            // var sucessfulContactConfirmation = browser.isExisting("#contact_reply h1");
            // expect(sucessfulContactConfirmation, "Sucessful submission Message does not exist").to.be.false;
        });
        it('Should not be able to submit a sucessful submission via contact us form as all fields are required', function (done) {
    
            /* 
                side note - we can create our own selectors inside the it block like so:
                var lastname  = $("[name = 'last_name']");
                lastname.setValue('Pierre");
            */
            setFirstName(contacUsDetails.name);
            setEmailAddress(contacUsDetails.email);
            clickSubmitButton();
            confirmUnsuccessfulSubmission();
            // browser.setValue("[name='first_name']", 'Pierre');
            // browser.setValue("[name='email']", 'pierre.goldstein@gmail.com');
            // browser.click("[type='submit']");
    
            // var sucessfulContactConfirmation = browser.isExisting("#contact_reply h1");
            // expect(sucessfulContactConfirmation, "Sucessful submission Message does not exist").to.be.false;
        });
        it('Should not be able to submit a sucessful submission via contact us form as all fields are required', function (done) {
            
            setFirstName(contacUsDetails.name);
            setLastName(contacUsDetails.name);
            clickSubmitButton();
            console.log(browser.getText(unsuccessfulSubmissionLocator))
            expect(browser.getText(unsuccessfulSubmissionLocator)).to.include('Error: all fields are required\nError: Invalid email address');
            
            // browser.setValue("[name='first_name']", 'Pierre');
            // browser.setValue("[name='last_name']", 'Goldstein');
            // browser.click("[type='submit']");
    
            // var errorText = browser.getText('body');
            // expect(errorText).to.include('Error: all fields are required');
    
            // var errorText = browser.isVisible('body');
            // expect(errorText, 'Error message is not visible').to.be.true;
        });
    });
});
        //Phase 1 - Improving our existing code (END)