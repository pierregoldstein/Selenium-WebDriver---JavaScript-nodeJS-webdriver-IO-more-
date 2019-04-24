/* The $ command is a short way to call the findElement command in order to fetch a single element on the page. It returns an object that with an extended prototype to call 
action commands without passing in a selector. However if you still pass in a selector it will look for that element first and call the action on that element.

Using the wdio testrunner this command is a global variable else it will be located on the browser object instead.

You can chain $ or $$ together in order to walk down the DOM tree. For more information on how to select specific elements, see Selectors.

*/
class ContactUs_Page {
	get firstName() { return $("[name='first_name']");}
	get lastName() { return $("[name='last_name']");}
	get comments() { return $("textarea");}
	get emailAddress() { return $("[name='email']");}
	get submitButton() { return $("[type='submit']");}
	get successfulSubmissionHeader() { return $("#contact_reply h1");}
	get unsuccessfulSubmissionHeader() { return $("body");}
}

module.exports = new ContactUs_Page();

