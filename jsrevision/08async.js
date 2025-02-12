// let ans = new Promise((resolve, reject)=>{
//     if(false){
//        return resolve();
//     } else {
//        return reject();
//     }
// })

// ans
// .then(function(){
//     console.log("resolved");
// })
// .catch(function(){
//     console.log("rejected");
// })

// let ans = new Promise((resolve, reject)=>{
//     let age = 21;
//     if(age>18) {
//         return resolve();
//     } else {
//         return reject();
//     }
// })

// ans
// .then(()=>{
//     console.log("You can date!")
// })
// .catch(()=>{
//     console.log("You can't date!")
// })

//lets go back to hostel and perform tasks
//PROMISE CHAIN
// let ans = new Promise((resolve, reject)=>{
//     return resolve("change the dress!")
// })

// let ans2 = ans.then((data)=>{
//     console.log(data);
//     return new Promise((resolve, reject)=>{
//         return resolve("freshen up!")
//     })
// })

// let ans3 = ans2.then(function(data){
//     console.log(data);
//     return new Promise(function(resolve, reject){
//         return resolve("take snacks")  
//     })
// })

// let ans4 = ans3.then((data)=>{
//     console.log(data);
// })

// async code, noo .then() required
async function abcd(){
    let raw = await fetch('https://randomuser.me/api/');
    let ans = await raw.json();
    console.log(ans);
}
abcd();
