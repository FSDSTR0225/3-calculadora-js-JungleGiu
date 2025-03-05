// CREATES ALL THE DOM ELEMENTS
const numbersInKeybord = [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0];

numbersInKeybord.forEach((number) => {
  const numberButton = document.createElement("button");
  numberButton.textContent = number;
  numberButton.classList.add("number");
  document.querySelector(".number-buttons").appendChild(numberButton);
});

const operatorsInKeybord = ["+", "-", "x", "÷","%", "√", "^", "π"];

operatorsInKeybord.forEach((operator) => {
  const operatorButton = document.createElement("button");
  operatorButton.textContent = operator;
  operatorButton.classList.add("operator");
  document.querySelector(".operator-buttons").appendChild(operatorButton);
});

const functionsInKeyoard = ["canc", "reset", "="];

functionsInKeyoard.forEach((fnc) => {
  const functionButton = document.createElement("button");
  functionButton.textContent = fnc;
  if (fnc === "reset") {
    functionButton.classList.add("reset");
  }
  if (fnc === "canc") {
    functionButton.classList.add("canc");
  }
  if (fnc === "=") {
    functionButton.classList.add("equal");
  }

  functionButton.classList.add("function");
  document.querySelector(".function-buttons").appendChild(functionButton);
});

// CREATES ALL THE DOM ELEMENTS

// ALLOWS TO PUSH BUTTONS AND SHOW THEIR FEEDBACK ON SCREEN
const displayDiv = document.querySelector(".display");
const opString= document.querySelector('.op-string')
const addToDisplay = (button) => {
  const buttonValue = button.textContent;
opString.textContent += buttonValue
};

document.querySelectorAll(".number").forEach((numberButton) => {
  numberButton.addEventListener("click", () => addToDisplay(numberButton));
});

document.querySelectorAll(".operator").forEach((operatorButton) => {
  operatorButton.addEventListener("click", () => addToDisplay(operatorButton));
});

// ALLOWS TO PUSH BUTTONS AND SHOW THEIR FEEDBACK ON SCREEN

// EXECUTES BASIC CALCULATIONS

const evaluateString = opString =>{
let operands = opString.textContent.split(/[+\-x÷%√^]/g).map(operand => Number(operand))
let operators =opString.textContent.match(/[+\-x÷%√^]/g)
return calculateExpression(operands,operators)
}

const calculateExpression = (operands,operators) => {
    let result = operands[0]
    for (let i=0; i < operators.length; i++){
          if (operators[i]=== 'x'){
              result *= operands[i+1]
            } else if (operators[i] === '÷'){
                 result /= operands[i+1]
          } else if (operators[i]==='%'){
            result = result % operands[i+1]
       } else if (operators[i]=== '^'){
 result = Math.pow(result,operands[i+1])
        }else if (operators[i]=== '√'){
         result = Math.sqrt(operands [i+1])   
        }
     }

 for (let i=0; i < operators.length; i++){
     if(['+','-'].includes(operators[i])){
     if (operators[i]=== '+'){
       result += operands[i+1];
        } else if(operators[i]==='-'){
       result -= operands[i+1]
       }
    }
 }
 return result
 }


// EVENT LINSTENER FOR FUNCTIONALITY BUTTONS
// =
document.querySelector(".equal").addEventListener("click", () => {
  const evokeResult = evaluateString(opString)
  let resultDiv = document.createElement("div");
  resultDiv.classList.add("result");
  resultDiv.textContent =evokeResult;
  displayDiv.appendChild(resultDiv);
});

// reset
document.querySelector(".reset").addEventListener("click", () => {
 opString.textContent = '';
 const resultDiv = document.querySelector(".result")
 if(resultDiv){
  resultDiv.remove();}
});

document.querySelector(".canc").addEventListener("click", () => {
    opString.textContent = opString.textContent.slice(0, -1);
});

// EVENT LINSTENER FOR FUNCTIONALITY BUTTONS
