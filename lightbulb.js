let bulb = document.querySelector("#bulb");
let btn = document.querySelector("button");

let flag = 0; 
btn.addEventListener("click", function() {
    if (flag == 0) {
        bulb.style.backgroundColor = "yellow";
        console.log("Bulb ON");
        flag = 1;
    } else {
        bulb.style.backgroundColor = "gray";
        console.log("Bulb OFF");
        flag = 0;
    }
});
