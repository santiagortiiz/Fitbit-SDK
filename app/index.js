// import document from "document";
const document = require("document")
let demo = document.getElementById("demo");
demo.text = "Hello World!";

// import * as messaging from "messaging";
const { messaging } = require("messaging");

// Listen for the onopen event
messaging.peerSocket.onopen = function() {
    messaging.peerSocket.send("Hi, im the fitbit Device!");
}
  
// Listen for the onmessage event
messaging.peerSocket.onmessage = function(evt) {
    console.log(evt.data);
}
  
// Listen for the onerror event
messaging.peerSocket.onerror = function(err) {
    console.log(err);
}