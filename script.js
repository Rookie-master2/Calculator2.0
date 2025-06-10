<<<<<<< HEAD
// === Module: Evaluate the Full Expression ===   soknea1 (feature)
function evaluateExpression() {
   try {
     const result = eval(expression);
     resultEl.textContent = result;
     expressionEl.textContent = expression;
     expression = result.toString();
   }
   catch {
  
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
=======
// === Module: Clear All ===   channin (feature)
function clearExpression() {
 expression = "";
 updateDisplay();
>>>>>>> feature/issue_#9
}
// === Module: Exponentiation ^ === Phal (feature)
function handleExponent() {
 expression += "**";
 updateDisplay();
}
