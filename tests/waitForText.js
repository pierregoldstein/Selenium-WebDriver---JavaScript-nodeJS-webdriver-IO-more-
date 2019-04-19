beforeEach(function(){
	browser.url("/Accordion/index.html");
})
describe('Verify that the correct text appears on the accordion page', function() {
	it('Verify loading complete text is visible after a set duration of time', function() {
		this.timeout(20000); //sets timeout in wdio.conf.js
		//Find the hidden text in the loading part of the page right clicking with ranorex, copying css, 
		//inspecting the page and using the ranorex tool to search for the element on the page, then find the 
		//hidden-text id.
		elem = $('#hidden-text');
		console.log("Current Text: "+elem.getText());
		elem.waitForText(1000);

		while(elem.getText() != 'LOADING COMPLETE') {
			browser.pause(1000);
		}
		console.log(elem.getText());
	});
});