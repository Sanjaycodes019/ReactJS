// function passed as an arguement to another function
// executed later when async task completes

function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Sanjay", sayGoodbye);
