// === Module: Element References ===  Rida1 (feature)
const expressionEl = document.querySelector(".expression");
const resultEl = document.querySelector(".result");
const buttons = document.querySelectorAll("button");
let expression = "";

// === Module: Event Listener for Buttons ===  Rith (Track Feature from Rida1)
buttons.forEach(button => {
 button.addEventListener("click", () => {
   const value = button.textContent;


   switch (value) {
     case "C":
       clearExpression();
       break;


     case "⌫":
       backspace();
       break;


     case "=":
       evaluateExpression();
       break;


     case "%":
       applyPercentage();
       break;


     case "≠":
       toggleNegative();
       break;


     case "^":
       handleExponent();
       break;


     case "√":
       handleSquareRoot();
       break;


     default:
       appendToExpression(value);
       break;
   }
 });
});


// === Module: Evaluate the Full Expression ===   Hong (Hotfix track on soknea1)


function evaluateExpression() {
  try {
    const result = eval(expression);
    resultEl.textContent = result;
    expressionEl.textContent = expression;
    expression = result.toString();
  }
  catch {
    resultEl.textContent = "Error"; 
  }
}



// === Module: Toggle Negative === soknea2 (feature)
function toggleNegative() {
   const match = expression.match(/(\-?\d+\.?\d*)$/);
   if (match) {
     const number = parseFloat(match[1]);
     const toggled = -number;
     expression = expression.replace(/(\-?\d+\.?\d*)$/, toggled.toString());
     updateDisplay();
   }
}

// === Module: Apply Percentage ===   channy (feature)
function applyPercentage() {
   const match = expression.match(/(\d+\.?\d*)$/);
   if (match) {
     const number = parseFloat(match[1]);
     const percentValue = number / 100;
     expression = expression.replace(/(\d+\.?\d*)$/, percentValue.toString());
     updateDisplay();
   }
 }

// channy  (Hotfix on rida2)
function appendToExpression(value) { 
    const lastNumberMatch = expression.match(/(\d+\.?\d*)$/);
    if (value === "0" && lastNumberMatch && lastNumberMatch[1] === "0") {
      return;
    }
    if (value === "0" && /[\+\-\*\/\(\)]0$/.test(expression)) {
      return;
    }
    if (/^0$/.test(expression) && value !== ".") {
      expression = value;
    } else {
      expression += value;
    }
    updateDisplay();
  }


// === Module: Update UI Display ===   Thida (feature track from rida)
function updateDisplay() {
 expressionEl.textContent = expression;
 resultEl.textContent = expression || "0";
}


// === Module: Square Root √ ===   Hong (feature)
function handleSquareRoot() {
 const match = expression.match(/(\d+\.?\d*)$/);
 if (match) {
   const number = parseFloat(match[1]);
   const sqrtValue = Math.sqrt(number);
   expression = expression.replace(/(\d+\.?\d*)$/, sqrtValue.toString());
   updateDisplay();
 }
}

// === Module: Exponentiation ^ === Phal (feature)
function handleExponent() {
 expression += "**";
 updateDisplay();
}

// === Module: Clear All ===   channin (feature)
function clearExpression() {
 expression = "";
 updateDisplay();
}

// 777



