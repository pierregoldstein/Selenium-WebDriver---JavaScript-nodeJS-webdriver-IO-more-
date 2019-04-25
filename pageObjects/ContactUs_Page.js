/* The $ command is a short way to call the findElement command in order to fetch a single element on the page. It returns an object that with an extended prototype to call 
action commands without passing in a selector. However if you still pass in a selector it will look for that element first and call the action on that element.

Using the wdio testrunner this command is a global variable else it will be located on the browser object instead.

You can chain $ or $$ together in order to walk down the DOM tree. For more information on how to select specific elements, see Selectors.

*/
class ContactUs_Page {
    /* "GET" method for our class */
	get firstName() { return $("[name='first_name']");}
	get lastName() { return $("[name='last_name']");}
	get comments() { return $("textarea");}
	get emailAddress() { return $("[name='email']");}
	get submitButton() { return $("[type='submit']");}
	// get successfulSubmissionHeader() { return $("#contact_reply h1");}
    // get unsuccessfulSubmissionHeader() { return $("body");}
    
    setFirstName(firstName) {
        return this.firstName.setValue(firstName);
    }
    
    setLastName(lastName) {
        return this.lastName.setValue(lastName);
    }
    
    setEmailAddress(emailAddress) {
        return this.emailAddress.setValue(emailAddress);
    }
    
    setComments(comments) {
        return this.comments.setValue(comments);
    }
    
    clickSubmitButton() {
        return this.submitButton.click();
    }
    
    submitAllInformationViaContactUsForm(firstName, lastName, emailAddress, comments){
        if(firstName){
            return this.firstName.setValue(firstName);
        }
        if(lastName){
            return this.lastName.setValue(lastName);
        }
        if(emailAddress){
            return this.emailAddress.setValue(emailAddress);
        }
        if(comments){
            return this.comments.setValue(comments);
        }
        this.submitButton.click();
        this.confirmSuccessfulSubmission();
    }
    
    confirmSuccessfulSubmission() {
        var successfulSubmissionHeader = "#contact_reply h1";
        var validateSubmissionHeader = browser.waitUntil(function() {
            return browser.getText(successfulSubmissionHeader) == 'Thank You for your Message!'
        }, 3000)
        expect(validateSubmissionHeader, 'Successful Submission Message does not Exist!').to.be.true;
    }
    
    confirmUnsuccessfulSubmission() {
        var unsuccessfulSubmissionHeader = "body";
        var validateSubmissionHeader = browser.waitUntil(function() {
            return browser.getText(unsuccessfulSubmissionHeader) == 'Error: all fields are required'
        }, 3000)
        expect(browser.getText(unsuccessfulSubmissionHeader)).to.include('Error: all fields are required');
    }
    emailConfirmUnsuccessfulSubmission() {
        var unsuccessfulSubmissionHeader = "body";
        var validateSubmissionHeader = browser.waitUntil(function() {
            return browser.getText(unsuccessfulSubmissionHeader) == 'Error: all fields are required\nError: Invalid email address'
        }, 3000)
        expect(browser.getText(unsuccessfulSubmissionHeader)).to.include('Error: all fields are required\nError: Invalid email address');
    }
}



module.exports = new ContactUs_Page();

