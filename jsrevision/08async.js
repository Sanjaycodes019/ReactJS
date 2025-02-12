// async function example
//setTimeout(() => {
    // console.log("this is printed after 2 sec!")
//}, 2000);

// callbacks, revision again haha
//function one(call_two){
    //console.log(" step 1 completed , please call step 2 ")
//     call_two();
// }

// function two(){
//     console.log(" Step 2 ")
// }

// one(two);

// next example

let stocks = {
    fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"]
};

// let order = (fruit_name, call_production) => {
    // setTimeout(() => {
    //     console.log(`${stocks.fruits[fruit_name]} was selected!`)
    //     call_production();
    // }, 2000);
    // call_production();
// }
// callback hell
//  let production = () => {
//     setTimeout(() => {
//         console.log("production has started!")
//         setTimeout(() => {
//             console.log("the fruit has been chopped!")
//             setTimeout(() => {
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added!`);
//                 setTimeout(() => {
//                     console.log("machine has been started!");
//                     setTimeout(() => {
//                         console.log(`icecream was placed on ${stocks.holder[0]}`);
//                         setTimeout(() => {
//                             console.log(`${stocks.toppings[0]} was added!`)
//                            setTimeout(() => {
//                             console.log("icecream was served");
//                            }, 1000);
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     },1000);
//  };
 
 // order("1", production);

 
// promises

let is_shop_open = true; //change this value to check the code

// let order = (time, work) => {
//     return new Promise((resolve, reject) => {
//         if (is_shop_open) {
//             setTimeout(() => {
//                 resolve(work());
//             }, time);
//         } else {
//             reject(console.log("Our shop is closed!"));
//         }
//     });
// };

// order(2000, ()=>console.log(`${stocks.fruits[0]} was selected`) )
// .then(()=>{
//     return order(1000, ()=>console.log("production has started"))
// })
// .then(()=>{
//     return order(1000, ()=>console.log("the fruit was chopped") )
// })
// .then(()=>{
//     return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected!`) )
// })
// .then(()=>{
//     return order(1000, ()=>console.log("start the machine") )
// })
// .then(()=>{
//     return order(2000, ()=>console.log(`ice cream placed on ${stocks.holder[0]}`) )
// })
// .then(()=>{
//     return order(1000, ()=>console.log(`${stocks.toppings[0]} was selected`) )
// })
// .then(()=>{
//     return order(1000, ()=>console.log("icecream was served!"))
// })

// .catch(()=>{
//     console.log("customer left!")
// })

// .finally(()=>{
//     console.log("day ended, shop is closed!")
// })


// ASYNC AWAIT

// let order = () =>{
//     return new Promise((resolve, reject)=>{
//         if(true) {
//             resolve();
//         } else {
//             reject();
//         }
//     })
// }

// order()
// .then()
// .then()
// .then()
// .catch()
// .finally()

// async function order(){
//     try{
//         await abc;
//     } catch (error) {
//         console.log("abc doesn't exist", error)
//     } finally {
//         console.log("runs code anyway")
//     }
// }
// order()
// .then(()=>{
//     console.log("underfined")
// })

let toppings_choice = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(console.log("which topping do you like ?"))
        }, 1000);
    })
}

async function kitchen(){
    console.log(" A ")
    console.log(" B ")
    console.log(" C ")

    await toppings_choice()

    console.log(" D ")
    console.log(" E ")
}

kitchen()

console.log("cleaning the dishes")
console.log("cleaning the table")
console.log("taking other order")
