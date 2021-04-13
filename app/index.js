import * as messaging from "messaging";

var i = 0

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

// Speaking
function speaking(){
  messaging.peerSocket.send(i);
  i += 1
}

setInterval(speaking, 1000);