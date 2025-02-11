let arr = [12, 23, 34, 45, 34, 67, 98];

// arr.forEach((value, index)=>{
//     console.log("Index: ", index, " Number: ", value);
// })

let length = arr.length;
// console.log("The length of the array is: " + length);

// traditional for loop
for(let index = 0; index < length; index++ ){
    // console.log(index + " => " + arr[index]);
}

//forIn loop

let obj = {
    Name: "Sanjay Gupta",
    Age: 20, 
    Height: "5'10",
    Weight: "70kg"
};
for(let key in obj){
    //console.log(key,"=>", obj[key]);
}

// // for off loop
// for(let value of arr){
//     console.log(value);
// }

let fullName = "Sanjay Gupta";
for(let val of fullName){
    console.log(val);
}