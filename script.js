//DECLARING VARIABLES
let currentNum = "";
let previousNum = "";
let operator = "";
let result = "";

//GETTING THE INPUTS
let displayInput = document.getElementById("input");
let displayOutput = document.getElementById("output");

let buttons = document.querySelectorAll(".button")

for(let i =0; i< buttons.length;i++){
    buttons[i].addEventListener('click',() => getInput(buttons[i].textContent))
}

function getInput(input){
    switch(input) {
        case "1":
            appendNumber(1)
            break;
        case "2":
            appendNumber(2)
            break;
        case "3":
            appendNumber(3)
            break;
        case "4":
            appendNumber(4)
            break;
        case "5":
            appendNumber(5)
            break;
        case "6":
            appendNumber(6)
            break;
        case "7":
            appendNumber(7)
            break;
        case "8":
            appendNumber(8)
            break;
        case "9":
            appendNumber(9)
            break;
        case "0":
            //if(currentNum !== "")
                {appendNumber(0)}
            break;
        case "+":
            if(operator == ""){
            operator = "+"
            displayInput.textContent = `${currentNum} ${operator}`;
            previousNum = currentNum;
            currentNum = "";
            } else return
            break;
        case "-":
            if(operator == ""){
                operator = "-"
                displayInput.textContent = `${currentNum} ${operator}`;
                previousNum = currentNum;
                currentNum = "";
                } else return
            break;
        case "*":
            if(operator == ""){
                operator = "*"
                displayInput.textContent = `${currentNum} ${operator}`;
                previousNum = currentNum;
                currentNum = "";
                } else return
            break;
        case "/":
            if(operator == ""){
                operator = "/"
                displayInput.textContent = `${currentNum} ${operator}`;
                previousNum = currentNum;
                currentNum = "";
                } else return
            break;
        case "=":
            if (currentNum == "0" && operator == "/") {
                alert("ERROR")
            }
            else if(currentNum !== NaN && operator !== "" && previousNum !== NaN){
                result = Number(calculate(Number(previousNum),Number(currentNum),operator));
                displayInput.textContent = `${previousNum} ${operator} ${currentNum} =`   
                displayOutput.textContent = result;
                currentNum = result;
                previousNum = "";
                operator = "";
            }
            break;
        case "C":
            clearAll();
    }
}

function appendNumber(num){
    currentNum += num;
    displayInput.textContent = `${previousNum} ${operator} ${currentNum}`;
    return currentNum;
}

function clearAll(){
    currentNum = "";
    previousNum = "";
    operator = "";
    result = "";
    displayInput.textContent = "0";
    displayOutput.textContent = "0";
}

//CALCULATIONS
function calculate(a,b,op){
    if(op == "+"){
        return (a+b).toFixed(2)

    } else if (op == "-"){
        return (a-b).toFixed(2);

    } else if (op == "*"){
        return (a * b).toFixed(2);

    } else if (op == "/"){
        return (a/b).toFixed(2);

    } else {
        alert("You have to choose a valid operator!")
    }
}

