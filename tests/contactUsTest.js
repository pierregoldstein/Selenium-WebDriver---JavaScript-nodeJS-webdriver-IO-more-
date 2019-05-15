var ContactUs_Page = require("../pageObjects/ContactUs_Page.js"); // Referncing the ContacUs_Page.js
var request = require('sync-request');


beforeEach(async () => {
    await browser.url('/Contact-Us/contactus.html');
})

describe('Test Contact Us form WebdriverUni', () => {

    var res = request('GET', 'http://jsonplaceholder.typicode.com/posts/1/comments'); // Create the variable to "GET" json data
    var contacUsDetails = JSON.parse(res.getBody().toString('utf8')); // Format the JSON data

    contacUsDetails.slice(0, 5).forEach(function (contactUsDetails) {
        it('Test 1: Should be able to submit a successful submission via contact us form', () => {

						ContactUs_Page.submitAllInformationViaContactUsForm(contacUsDetails.name, contacUsDetails.name, contacUsDetails.email, contacUsDetails.body);
						ContactUs_Page.successfulSubmissionHeader.waitForDisplayed(3000);
						try{
							expect(ContactUs_Page.successfulSubmissionHeaderText).to.equal("Thank You for your Message!");
						}catch(err){
							console.log("Exception: "+err);
							assert.fail();
						}
        });


        it('Test 2: Should not be able to submit a successful submission via contact us form as all fields are required', () => {
           
            ContactUs_Page.submitAllInformationViaContactUsForm(contacUsDetails.name, contacUsDetails.name, contacUsDetails.email, null);
						ContactUs_Page.unsuccessfulSubmissionHeader.waitForDisplayed(3000);
						try{
							expect(ContactUs_Page.unsuccessfulSubmissionHeaderText).to.have.string("Error: all fields are required");
						}catch(err){
							console.log("Exception: "+err);
							assert.fail();
						}
        });


        it('Test 3: Should not be able to submit a successful submission via contact us form as all fields are required', () => {
            
						ContactUs_Page.submitAllInformationViaContactUsForm(contacUsDetails.name, null, contacUsDetails.email, null);
						ContactUs_Page.unsuccessfulSubmissionHeader.waitForDisplayed(3000);
						try{
							expect(ContactUs_Page.unsuccessfulSubmissionHeaderText).to.have.string("Error: all fields are required");
						}catch(err){
							console.log("Exception: "+err);
							assert.fail();
						}
        });

        it('Test 4: Should not be able to submit a successful submission via contact us form as all fields are required', () => {
           
						ContactUs_Page.submitAllInformationViaContactUsForm(null, contacUsDetails.name, contacUsDetails.email, null);
						ContactUs_Page.unsuccessfulSubmissionHeader.waitForDisplayed(3000);
						try{
							expect(ContactUs_Page.unsuccessfulSubmissionHeaderText).to.have.string("'Error: all fields are required\nError: Invalid email address'");
						}catch(err){
							console.log("Exception: "+err);
							assert.fail();
						}
        });
    });
});
