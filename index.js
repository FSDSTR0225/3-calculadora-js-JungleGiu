// CREATES ALL THE DOM ELEMENTS
const numbersInKeybord = [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0];

numbersInKeybord.forEach((number) => {
  const numberButton = document.createElement("button");
  numberButton.textContent = number;
  numberButton.classList.add("number");
  document.querySelector(".number-buttons").appendChild(numberButton);
});

const operatorsInKeybord = ["+", "-", "x", "÷"];

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

const advancedOperatorsInKeyoard = ["%", "√", "^", "π"];
advancedOperatorsInKeyoard.forEach((adFnc) => {
  const advancedOperatorsButton = document.createElement("button");
  advancedOperatorsButton.textContent = adFnc;
  if (adFnc === "%") {
    advancedOperatorsButton.classList.add("percent");
  }
  if (adFnc === "√") {
    advancedOperatorsButton.classList.add("sqrt");
  }
  if (adFnc === "^") {
    advancedOperatorsButton.classList.add("power");
  }
  advancedOperatorsButton.classList.add("operator");
  document
    .querySelector(".operator-buttons")
    .appendChild(advancedOperatorsButton);
});
// CREATES ALL THE DOM ELEMENTS

// ALLOWS TO PUSH BUTTONS AND SHOW THEIR FEEDBACK ON SCREEN
const displayDiv = document.querySelector(".display");
let firstOperator = document.querySelector("span.data1");
let secondOperator = document.querySelector("span.data2");
let operationSymbol = document.querySelector("span.op");
const addToDisplay = (button) => {
  const buttonValue = button.textContent;
  if (button.classList.contains("number") && operationSymbol.textContent) {
    secondOperator.textContent += button.textContent;
  } else if (button.classList.contains("operator")) {
    operationSymbol.textContent += button.textContent;
  } else if (operationSymbol.textContent === "") {
    firstOperator.textContent += button.textContent;
  }
};

document.querySelectorAll(".number").forEach((numberButton) => {
  numberButton.addEventListener("click", () => addToDisplay(numberButton));
});

document.querySelectorAll(".operator").forEach((operatorButton) => {
  operatorButton.addEventListener("click", () => addToDisplay(operatorButton));
});

// ALLOWS TO PUSH BUTTONS AND SHOW THEIR FEEDBACK ON SCREEN

// EXECUTES BASIC CALCULATIONS

const calculateExpression = (
  firstOperator,
  operationSymbol,
  secondOperator
) => {
  firstOperator = Number(firstOperator);
  secondOperator = Number(secondOperator);
  if (operationSymbol === "+") {
    return firstOperator + secondOperator;
  } else if (operationSymbol === "-") {
    return firstOperator - secondOperator;
  } else if (operationSymbol === "x") {
    return firstOperator * secondOperator;
  } else if (operationSymbol === "÷") {
    return firstOperator / secondOperator;
  } else if (operationSymbol === "^") {
    return firstOperator ** secondOperator;
  } else if (operationSymbol === "%") {
    return (secondOperator / 100) * firstOperator;
  } else if (operationSymbol === "√") {
    return Math.sqrt(secondOperator);
  } else if (operationSymbol === "π") {
    return Math.PI * secondOperator;
  }
};

// EVENT LINSTENER FOR FUNCTIONALITY BUTTONS
// =
document.querySelector(".equal").addEventListener("click", () => {
  const result = calculateExpression(
    firstOperator.textContent,
    operationSymbol.textContent,
    secondOperator.textContent
  );
  let resultDiv = document.createElement("div");
  resultDiv.classList.add("result");
  resultDiv.textContent = result;
  displayDiv.appendChild(resultDiv);
});

// reset
document.querySelector(".reset").addEventListener("click", () => {
  firstOperator.textContent = "";
  secondOperator.textContent = "";
  operationSymbol.textContent = "";
  document.querySelector(".result").remove();
});

document.querySelector(".canc").addEventListener("click", () => {
  if (secondOperator.textContent !== "") {
    secondOperator.textContent = secondOperator.textContent.slice(0, -1);
  } else if (operationSymbol.textContent !== "") {
    operationSymbol.textContent = operationSymbol.textContent.slice(0, -1);
  } else if (firstOperator.textContent !== "") {
    firstOperator.textContent = firstOperator.textContent.slice(0, -1);
  }
});

// EVENT LINSTENER FOR FUNCTIONALITY BUTTONS
