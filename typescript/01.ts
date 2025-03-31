// Basic types:
// Primitive types -> (number, boolean, string)
// Arrays
// Tuples
// Enums
// Any, Unknown, Void, Null, Undefined, Never

// primitive and reference
// (), {}, [] -> reference (original value will be affected)
// all other non-braces are primitive

// variables
// var, let, const
// var not used

// Arrays

// let arr = [1, 2, 3, {name: sanjay}];
// let brr: number[] = [1, 2, 4]

// tuples
// let arr: [string, number] = ["sanjay", 21]; 

// Enums -> enumerations
// enum userRoles{
//    ADMIN = "admin",
//    GUEST = "guest",
//    SUPER_ADMIN = "super_admin"
// }

// enum StatusCodes{
//     ABANDONED = "abandoned status code 500",
//     NOTFOUNT = "not found status code 404"
// }

// let a : number;

// ensure that no any variable has type any;
// any happens when the variable is unknownly declared
// with any, typescript is off

// example
// let a;
// a = "Sanjay";
// a = 21;

// if the type is unknown, no any function works over there

// function abc(): void{
//     console.log("hello, Sanjay");
// }

// if the function is not returning anyth

// function abc(): number{
// return 12;
// }

// null type
// let a : null;
// a = 12; 'this gives error'

// Union
// let a : string | null;

// never
// returns nothing
// function abc(){
//     while(true) {}
// }

// type inference
// understanding type inference
// type annotations

// let a = 12; //type inference
// let a:number = 12; //type annotations

// let a: number | boolean | string;
//  a = 12;
//  a = true;
//  a = "sanjay"

// function abc(a: number, b: string): void{
// }

// type aliases, intersection types

// interface User{
//     name:string,
//     email:string,
//     password:string
// }

// function getDataOfUser(obj: User){
// }

// //here obj is usertype // type aliases

// getDataOfUser({name: "sanjay", email: "sanjay1621@", password:"hey012"});


// extending interfaces

// interface User{
//     name:string;
//     email:string;
//     password:string;
// }

// interface Admin extends User{
//     admin: boolean;
// }

// function abc(obj:user){
//     // if user is used, only 3 properties are shown, if admin is 
//     // used all the four properties are shown including admin.
// }


// type sankhya = number;
// let a: sankhya;

// a = 12 // type aliases

// type value = string | number | null;
// let a: value;

