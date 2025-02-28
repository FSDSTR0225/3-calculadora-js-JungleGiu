// CREATES ALL THE DOM ELEMENTS
const numbersInKeybord = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

numbersInKeybord.forEach((number) => {
  const numberButton = document.createElement("button");
  numberButton.textContent = number;
  numberButton.classList.add("number");
  document.querySelector(".number-buttons").appendChild(numberButton);
});

const operatorsInKeybord = ["+", "-", "*", "/"];

operatorsInKeybord.forEach((operator) => {
  const operatorButton = document.createElement("button");
  operatorButton.textContent = operator;
  operatorButton.classList.add("operator");
  document.querySelector(".operator-buttons").appendChild(operatorButton);
});

const functionsInKeyoard = ["reset", "=", "canc"];

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
 

// PINTA EN PANTALLA LOS NUMEROS Y OPERADORES
const stringOperation = document.querySelector(".display");
let firstOperator = document.querySelector("span.data1");
let secondOperator = document.querySelector("span.data2");
let operationSymbol = document.querySelector("span.op");
const addToDisplay = (button) => {
  const buttonValue = button.textContent;
  if (button.classList.contains("number")&& operationSymbol.textContent) {
    secondOperator.textContent += button.textContent;}
  
    else if (button.classList.contains("operator")) {
      operationSymbol.textContent += button.textContent; 
    }
    else if (operationSymbol.textContent === '') {
      firstOperator.textContent += button.textContent;

  }
}

document.querySelectorAll(".number").forEach((numberButton) => {
  numberButton.addEventListener ('click', () => addToDisplay(numberButton))
});

document.querySelectorAll(".operator").forEach((operatorButton) => {
  operatorButton.addEventListener ('click', () => addToDisplay(operatorButton))
});

// PINTA EN PANTALLA LOS NUMEROS Y OPERADORES



// CALCULA EL RESULTADO Y lo imprime en la pantalla

const calculateExpression = (firstOperator, operationSymbol, secondOperator, ) => {
  firstOperator = Number(firstOperator);
  secondOperator = Number(secondOperator); 
  if (operationSymbol === "+") {
    return  firstOperator + secondOperator;
  } else if (operationSymbol === "-") {
    return  firstOperator - secondOperator;
  } else if (operationSymbol === "*") {
    return  firstOperator * secondOperator;
  } else if (operationSymbol === "/") {
    return  firstOperator / secondOperator;
  }
;}

// EVENT LINSTENER PARA LOS BOTONES DE FUNCIONALIDAD 


document.querySelector('.equal').addEventListener('click', () => {
const result =calculateExpression(firstOperator.textContent, operationSymbol.textContent, secondOperator.textContent)
  const resultDiv =document.createElement('div')
  resultDiv.classList.add('result')
  resultDiv.textContent= result
  stringOperation.appendChild(resultDiv)
})

document.querySelector('.reset').addEventListener('click', () => {
  firstOperator.textContent = '';
  secondOperator.textContent ='';
operationSymbol.textContent= '';
document.querySelector('.result').textContent= '';
})


const newopString = () => {
  const spans = document.querySelectorAll('span');
  let string='';
  spans.forEach(span =>{string += span.textContent;});
  return string
}



document.querySelector('.canc').addEventListener('click', () =>{

})

// EVENT LINSTENER PARA LOS BOTONES DE FUNCIONALIDAD