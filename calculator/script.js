function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if (b==0){
        return undefined;
    }
    return a/b;
}

console.log(add(3,10));
console.log(subtract(10,3));
console.log(multiply(10,3));
console.log(divide(10,3));

let firstNum = null;
let secondNum = null;
let operator = null;

function operate(a,b,op){
    switch (op){
        case "+":
            return roundResult(add(a,b));
        case "−":
            return roundResult(subtract(a,b));
        case "×":
            return roundResult(multiply(a,b));
        case "÷":
            return roundResult(divide(a,b));
        default:
            console.log("Error in Operator input");
            break;
    }
}

const display = document.getElementById("display");
const numButtons = document.querySelectorAll(".numbers button");

let currInput = "";
let resetDisplay = false;

numButtons.forEach(button => {
  button.addEventListener("click", () => {
    const dispVal = button.textContent;
    if (resetDisplay) {
      currInput = "";
      resetDisplay = false;
    }
    currInput += dispVal;
    updateDisplay(currInput);
  });
});


const opsButtons = document.querySelectorAll(".ops button");
const equalsButton = document.querySelector(".equals button");
const acButton = document.querySelector(".clear button");

function updateDisplay(inp){
    display.textContent = inp.toString().slice(0,15);
}

opsButtons.forEach(button => {
    button.addEventListener("click", () => {
        const op = button.textContent;
        if (operator && currInput !== ""){
            secondNum = parseFloat(currInput);
            const result = operate(firstNum, secondNum, operator);
            updateDisplay(result);
            firstNum = result;
            currInput = "";
        }
        else {
            firstNum = parseFloat(currInput);
            currInput = "";
        }
        operator = op;
    })
});

equalsButton.addEventListener("click", () => {
  if (operator === null || currInput === "") return;

  secondNum = parseFloat(currInput);
  const result = operate(firstNum, secondNum, operator);

  updateDisplay(result);
  firstNum = result;
  currInput = "";
  operator = null;
  resetDisplay = true;
});

acButton.addEventListener("click", clearAll);


function clearAll() {
  currInput = "";
  firstNum = null;
  secondNum = null;
  operator = null;
  resetDisplay = false;
  updateDisplay("0");
}

function roundResult(num){
    return Math.round(num*1000)/1000;
}