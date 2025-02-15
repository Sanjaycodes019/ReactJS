// fetch api provides an interface for fetching (sending/receiving) resources
// uses request and response objects
// fetch() method is used to fetch resource (data)
// API - Application Programming interface
// returns data in object formate
// let promise = fetch(url, [optio])

const url = "https://cat-fact.herokuapp.com/facts";
// let promise = fetch(url);
// console.log(promise);

const getFacts = async() => {
    console.log("getting data...");
    let response = await fetch(url);
    console.log(response); // JSON formate
}

// getFacts();


// understanding terms
// AJAX IS Asynchronous JS and XML
// JSON is javascrips object notation
// json() method : returns a second promise that resolves with the result of parsing
// the response body text as JSON. (input is JSON, output is JS object)

