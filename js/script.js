$(document).ready(function () {
	console.log("Hello, World!")
	
	
	var ex = new WebSocket('ws://127.0.0.1:3555')
	
	// global.WebSocket API (not the node API)
	ex.onopen = function (event) {
		ex.send('hi')
	}
	
	ex.onmessage = function (event) {
		console.log(event.data)
		ex.send('hi')
	}
	
});
