describe('Test that the button is clickable once the ajax loader completes loading',function(){
    it('Attempt to click on the button asap...no pause funtion',function(done){
        browser.url('/Ajax-Loader/index.html');
        browser.click('#button1');
    });

    it('Attempt to click on the button asap...no pause funtion',function(done){
        browser.url('/Ajax-Loader/index.html');
        this.timeout(20000);  // Override the default timeout object in wdio.conf.js from 10 seconds to 20
        browser.pause(7000);
        browser.click('#button1');
        browser.pause(7000);
    });
});