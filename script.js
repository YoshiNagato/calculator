//CALCULATIONS
function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a/b;
}

let num1;
let num2;
let operator;

//OPERATE
function calculate(a,b,op){
    if(op == "+"){
        add(a,b);
    } else if (op == "-"){
        subtract(a,b);
    } else if (op == "*"){
        multiply(a,b);
    } else if (op == "/"){
        divide(a.b);
    } else {
        alert("You have to choose a valid operator!")
    }
}