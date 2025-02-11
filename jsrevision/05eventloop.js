//sync code
console.log("hi");
console.log("Sanjay");
console.log("how are you?");

//async code
console.log("hi");
setTimeout(() => {
    console.log("How are you?");
}, 2000); // Executes after 2 seconds

console.log("Sanjay");

console.log("Start"); 

setTimeout(() => {
    console.log("Timeout Callback");
}, 0);

Promise.resolve().then(() => console.log("Promise Resolved"));

console.log("End");
