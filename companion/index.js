import * as messaging from "messaging";

// Listen for the onopen event
messaging.peerSocket.onopen = function() {
    messaging.peerSocket.send("Hi, from companion!");
}
  
// Listen for the onmessage event
messaging.peerSocket.onmessage = function(evt) {
    console.log(`Speaking between device and companion: ${evt.data}`);
}

// Listen for the onerror event
messaging.peerSocket.onerror = function(err) {
    console.log(err);
}

console.log("COMPANION\n")
const myHeaders = new Headers({'Content-Type': 'application/json'})
const obj = {
    name: "HR",
    price: "100",
    tags: ["red", "expensive"]
}

const API = 'http://localhost:8000/api/products/'
console.log("BEFORE")
fetch(API, {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(obj)
})
    .then( response => {
        return response.json()
    })
    .then( data => {
        console.log(data)
    })
    .catch ((err) => {
        console.error(err)
    })
console.log("AFTER")