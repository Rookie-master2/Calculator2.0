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
}