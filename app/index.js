import * as messaging from "messaging";

// Listen for the onopen event
messaging.peerSocket.onopen = function() {
    messaging.peerSocket.send("Hi, from Fitbit device!");
}
  
// Listen for the onmessage event
messaging.peerSocket.onmessage = function(evt) {
    console.log(evt.data);
}
  
// Listen for the onerror event
messaging.peerSocket.onerror = function(err) {
    console.log(err);
}