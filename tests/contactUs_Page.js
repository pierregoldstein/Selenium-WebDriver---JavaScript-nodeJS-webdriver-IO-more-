class contactUsPage{
    get firstName() {return $("[name='first_name']")}
    get lastName() {return $("[name='last_name']")}
    get comments() {return $('textarea')}
    get emailAddress() {return $("[name='email']")}
    get submitButton() {return $("#form_buttons .contact_button:nth-of-type(2)")}
    get successfulSubmissionHeader() {return $("#contact_reply h1")}
    get unsuccessfulSubmissionHeader() {return $("body")}
}