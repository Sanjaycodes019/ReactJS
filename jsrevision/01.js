//array and objects
let obj = {
    "full name": "Sanjay", //use " " if you have double worded key
    age: 20,
    height: "5'10",
    course: "becse",
    greet: function(){
        console.log("hi im coding!");
    }
};
//console.log(obj);
obj.greet();

//console.log("the type is: "+ typeof(obj));
//console.log("the type is:", typeof obj);
//we can use the both way to write

let obj2 = obj; //obj2 is pointing to the same thing in heap memory
// shallow copy
// no new object is formed!

/*

Feature	                    Shallow Copy	Deep Copy
Copies top-level properties ✅ Yes	      ✅ Yes
Copies nested objects fully	❌ No          ✅ Yes (creates new objects)
Affects original object    	✅ Yes	      ❌ No
Performance	                ⚡ Faster	  🐢 Slower

*/


// arrays
// collection of items (in js)
 
//let arr = [2, "sanjay", 5, 21, 7, 8]; //array literals

// let arr1 = new Array('sanjay', 2, true); //array constructor

// console.log("the type of arr is " + typeof(arr));
// console.log("the type of arr1 is " + typeof(arr1));

// type of array is always object

// accessing array : index

//console.log(arr1[0]);
 // array builtin methods
 // adding and removing elements

// arr.push("gupta"); //adds at the end
// arr.push("32"); 
// arr.pop(); // removes the last element
// arr.unshift("Hero") //adds at the beginning
// arr.shift(); // removes from the beginning

// console.log(arr);


//searching and checking elements
//  console.log(arr.indexOf("sanjay"));
//  console.log(arr.includes(22));

//modifying and sorting
// arr.sort();
/*
Method	 | Description	
sort()	 | Sorts the array (default is alphabetical)
reverse()| Reverses the array order	
splice() | Adds/removes elements at a specific index	
slice()	 | Returns a portion of an array	
*/

// Use slice() when you want to extract elements without modifying the original array.
// Use splice() when you want to remove or insert elements and modify the original array.
// arr.slice(start, end)
// arr.splice(start, deleteCount, item1, item2, ...)

//let arr = [1, 23, "sanjay", "guitar"]
//arr.splice(3, 0, "fitness"); //fitness added at the index 3
// 0 is for not removing any of the element
//console.log(arr);

//arr.splice(2, 1) // sanjay removed which was at index 2
//console.log(arr);

// map filter or reduce
let arr = [10, 11, 20, 23, 34, 42, 30];
// let ans = arr.map((number)=>{
//     return number*number;
// })
// console.log(ans);

// let item = arr.map((num)=>{
//    console.log(num+1);
// })

// console.log(typeof(item)); //remember , type is always object

let hero = arr.map((num, index)=>{
    // console.log(index);
    // console.log(num);
}) // prints one by one like loop, 0, 10, 1, 20, 2, 30....

// filter
let item = arr.filter((number)=>{
    // if(number % 2 === 0 ) {
    //     return true;
    // }
    // return false;

    //above can be written in the below way
    return number % 2 === 0;
})

//console.log(item); // returns all the even number from the arr

let brr = [21, 100, "Sanjay", 'gupta', null];

let answer = brr.filter((value)=>{
    if(typeof(value) === 'string'){
            return true;
        } else
    return false;
});
//console.log(answer); 


// reduce method

let sum = arr.reduce((acc, curr)=>{
    return acc + curr;
}, 0) // 0 is initialized to acc
// for simplicity, acc = acc + curr; it works like that
//console.log("the sum is " + sum);

let sorted = brr.sort();
console.log(sorted);

let result = brr.find(element => typeof element === 'string');
console.log(result);  // only gives the first string
