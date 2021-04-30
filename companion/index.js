const myHeaders = new Headers({'Content-Type': 'application/json'})

/* Fetch - GET */
const API = 'https://rickandmortyapi.com/api/character/1'

fetch(API, {
    method : "GET",
    headers : myHeaders
}) 
    .then( response => {
        return response.json()
    })
    .then( data => {
        console.log("\nGET Method using Fetch")
        console.log(data)
    })
    .catch ((err) => {
        console.error(err)
    })

/* Fetch - POST */
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
        console.log("\nPOST Method using Fetch")
        console.log(data)
    })
    .catch ((err) => {
        console.error(err)
    })