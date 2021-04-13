// import * as messaging from "messaging";
const { messaging } = require("messaging");

// Listen for the onopen event
messaging.peerSocket.onopen = function() {
    messaging.peerSocket.send("Hi, im the companion app!");
}
  
// Listen for the onmessage event
messaging.peerSocket.onmessage = function(evt) {
    console.log(evt.data);
    console.log('\n')
    console.log(JSON.stringify(evt.data));
}

// Listen for the onerror event
messaging.peerSocket.onerror = function(err) {
    console.log(err);
}