// destructuring : extract values from array and object
            //    assign them to variables in convenient Way 
            //    [] = to perfrom array destructuring
            //    {} = to perfrom object destructuring

// swapping
// 01

// let a = 1;
// let b = 3;

// [a, b] = [b, a];

// console.log(a)
// console.log(b)

// const colors = ["red", "green", "blue", "white", "black"];
// // [colors[0], colors[4]] = [colors[4], colors[0]];
// // console.log(colors); //[ 'black', 'green', 'blue', 'white', 'red' ]


// // assigning 
// const[firstColor, secondColor, thirdColor,...remainingColor] = colors;
// console.log(firstColor); // red
// console.log(thirdColor); // blue
// console.log(remainingColor); //[ 'white', 'black' ]


// extract from object

const p1 = {
    firstName : "Sanjay", 
    lastName : "Gupta",
    age : 20,
    job : "Engineer"
}

const p2 = {
    firstName : "Gopal", 
    lastName : "Kafle",
    age : 19
}

// const {firstName, lastName, age, job = "CA"} = p1;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);


// destructor in function parameters

function displayPerson({firstName, lastName, age, job = "CA"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);

}

displayPerson(p2)