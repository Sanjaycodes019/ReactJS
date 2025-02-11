// 4 pillers of dom

/*
1. selection of elements
2. changing html
3. changing css
4. event listener
*/

let p = document.querySelector("p");
p.innerText = "sanjay";
console.log(p);

let h1 = document.querySelector("h1");
h1.style.color = 'yellow';
h1.style.backgroundColor = "black";
 
// event listener
h1.addEventListener("click", function(){
    alert("h1 is clicked! ");
    p.innerHTML = " kaat diya tha na usne? lol";
    p.style.color = "yellow";
});