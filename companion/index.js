// import * as messaging from "messaging"
// import { me as companion } from "companion"

const myHeaders = new Headers({'Content-Type': 'application/json'})
const API = 'https://rickandmortyapi.com/api/character/1'

console.log("BEFORE")
fetch(API, {
    method : "GET",
    headers : myHeaders
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