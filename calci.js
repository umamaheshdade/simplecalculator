// all the buttons with their ids .....
let one = document.getElementById("number1");
let two = document.getElementById("number2");
let three = document.getElementById("number3");
let four = document.getElementById("number4");
let five = document.getElementById("number5");
let six= document.getElementById("number6");
let seven = document.getElementById("number7");
let eight = document.getElementById("number8");
let nine = document.getElementById("number9");
let zero = document.getElementById("zero");
let dot = document.getElementById("decimal");
let backspace = document.getElementById("backspace");
let clear_All = document.getElementById("clearall");
let clear = document.getElementById("clear");
let remainder = document.getElementById("remainder");
let equals = document.getElementById("equals");
let addition = document.getElementById("add");
let subtract = document.getElementById("sub");
let multiply = document.getElementById("multi");
let division = document.getElementById("div");

// input values...
let input = document.getElementById("result");
input.value= "";
one.onclick = ()=>{
    input.value += 1;
}
two.onclick=()=>{
    input.value += 2;
}
three.onclick=()=>{
    input.value += 3;
}
four.onclick=()=>{
    input.value += 4;
}
five.onclick=()=>{
    input.value += 5;
}
six.onclick=()=>{
    input.value += 6;
}
seven.onclick=()=>{
    input.value += 7;
}
eight.onclick=()=>{
    input.value += 8;
}
nine.onclick=()=>{
    input.value += 9;
}
zero.onclick=()=>{
    input.value += 0;
}
dot.onclick=()=>{
    input.value += ".";
}
clear_All.onclick=()=>{
    input.value = "";
}
clear.onclick=()=>{
    input.value="";
}

let a ="";
let b = "";

//calculation...part by eval() function....

addition.onclick=()=>{
     a = input.value;
     b = a[a.length-1];

    if(input.value === ""){
        input.value = "";
    }
    else if((b === "+") || (b === "-") || (b === "*") || (b === "/") || (b === "%")){
        alert("enter the valid input");
    }
    else {
        input.value += "+";
    }
}
subtract.onclick=()=>{
    a = input.value;
    b = a[a.length-1];

    if(input.value === ""){
        input.value = "";
    }
    else if((b === "+") || (b === "-") || (b === "*") || (b === "/") || (b === "%")){
        alert("enter the valid input");
    }
    else {
        input.value += "-";
    }
}
multiply.onclick=()=>{
    a = input.value;
    b = a[a.length-1];

    if(input.value === ""){
        input.value = "";
    }
    else if((b === "+") || (b === "-") || (b === "*") || (b === "/") || (b === "%")){
        alert("enter the valid input");
    }
    else {
        input.value += "*";
    }
}
division.onclick=()=>{
    a = input.value;
    b = a[a.length-1];

    if(input.value === ""){
        input.value = "";
    }
    else if((b === "+") || (b === "-") || (b === "*") || (b === "/") || (b === "%")){
        alert("enter the valid input");
    }
    else {
        input.value += "/";
    }
}
remainder.onclick=()=>{
    a = input.value;
    b = a[a.length-1];

    if(input.value === ""){
        input.value = "";
    }
    else if((b === "+") || (b === "-") || (b === "*") || (b === "/") || (b === "%")){
        alert("enter the valid input");
    }
    else {
        input.value += "%";
    }
}

equals.onclick=()=>{
    a = input.value;
    b = a[a.length-1];

    if ((b === "+") || (b === "-") || (b === "*") || (b === "/") || (b === "%")){
        alert("enter the valid numbers")
    }
    else if(input.value === ""){
        input.value="";
    }
    else {
        input.value = eval(a);
    }
}
backspace.onclick=()=>{
    a = input.value;
    b = a[a.length-1];
    a=a.replace(b,"");
    input.value=a;
}


//now with key up and down evnets....

document.addEventListener("keyup",()=>{
    let allowed_characeters = ["0","1","2","3","4","5","6","7","8","9","+","-","*","/","%","."];
    let char = event.key;

    if(allowed_characeters.includes(char)){
        input.value += char;
    }
    else if(char === "Backspace"){
        a = input.value;
        b = a[a.length-1];
        a=a.replace(b,"");
        input.value=a;
    }
    else if(char === "=") {
        a = input.value;
        b = a[a.length-1];

        if ((b === "+") || (b === "-") || (b === "*") || (b === "/") || (b === "%")){
            alert("enter the valid numbers");
        }
        else {
            input.value = eval(a);
        }
    }
})
