// arrays with functions
function getsum(arr){
    // let length = arr.length;
    let sum = 0;
    // for(let index = 0; index<length; index++){
    //     sum = sum + arr[index];
    // }
    // return sum;
    arr.forEach((value)=>{
        sum = sum + value;
    })
    return sum;
}

let arr = [10, 23, 32, 43, 43];
let totalsum = getsum(arr);
console.log("the sum is: " + totalsum);