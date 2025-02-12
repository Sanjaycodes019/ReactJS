// promise : solution of async code , OBJECT
// eventual completion and failure, 
// of sysnc operation, and resulting value

// three states : pending, fullfilled and rejected

const promiseOne = new Promise(function(resolve, reject){
    // do an async task
    // db calls, cryptography, network calls

    setTimeout(() => {
        //console.log("Async task is completed!");
        resolve();
    }, 1000);

})

promiseOne.then(()=>{
    //console.log("Promise Consumed!");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
      //console.log("Async task 2!");
      resolve();
    }, 1000);
}).then(function(){
    //console.log("async 2 resolved!");
})


 const promisethree = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve({username: "sanjay", age: "20"});
    }, 1000);
 })

 promisethree.then((user)=>{
    //console.log(user);
 })

 const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({username: "Sanjay", password: "123"})
        } else {
            reject('Error: Something went wrong')
        }
    }, 1000);
 })

 promiseFour
 .then((user)=>{
    //console.log(user);
    return user.username;
 })
 .then((username)=>{
    //console.log(username);
 })
 .catch((error)=>{
    //console.log(error);
 })
.finally(()=>{
    //console.log("The promise is either resolved or rejected")
})

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "js", time: "2days"})
        } else {
            reject("ERROR: couldn't study");
        }
    }, 1000);
})

async function consumepromisefive(){
    // const response = await promiseFive
    // console.log(response);

    try {
        const response = await promiseFive;
        // console.log(response);
    } catch (error)
    {
        // console.log(error);
    }
}

consumepromisefive();

// async function getALLUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);

//         // console.log(response);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getALLUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));
