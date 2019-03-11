/* 
    Step 1: create the webdriver object
*/
var webdriverio = require('webdriverio');
/*
    Step 2: create the options 
*/
var options = {
    desiredCapablities: {
        browserName: 'chrome'
    }
};
/*
    Step 3: intialize the object with the options
*/ 
var client = webdriverio.remote(options);

client
    .init()
    .setViewportSize({
        width: 1200,
        height: 800
    })
    .url('http://www.webdriveruniversity.com/')
    // .setValue('#search_from_input_homepage', 'WebdriverIO')
    .click('#login-portal') // The '#' symbol is used to identify 'id' in html
    .getTitle().then(function(title){
        alert('Title is: '+title);
    })
    .click('#contact-us')
    .pause(3000)
    .end();

    /*
    Step 4: a.  open gitbash and run ./node_modules/.bin/selenium-standalone start
            b.  In another instance of gitbash, run node contactTest.js
    */