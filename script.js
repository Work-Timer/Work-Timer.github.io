var run = false;
var time = 0;
function getTime() {
	return Date().split(' ')[4].split(':')[1];
}
var oldDateTime = getTime();

while(true) {
	this.onmessage = function(m) {
		if (m.data !== undefined) {
			if (m.data == "start") {
				run = true;
				console.log("Started");
			}
			else if (m.data == "pause") {
				run = false;
				console.log("Paused");
			}
			else if (m.data == "reset") {
				run = false;
				time = 0;
				console.log("Resetted");
			}
		}
	}

	if (run) {
		if (oldDateTime != getTime()) {
			oldDateTime = getTime();
			time++;
			this.postMessage(time);
		}
		console.log(time);
	}
}