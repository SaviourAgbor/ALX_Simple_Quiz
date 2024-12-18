// Arithmetic functions
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  // Prevent division by zero
  if (number2 === 0) {
      return "Error: Division by 0";
  }
  return number1 / number2;
}

// Function to get input values and validate them
function getInputValues() {
  const number1 = parseFloat(document.getElementById('number1').value) || 0;
  const number2 = parseFloat(document.getElementById('number2').value) || 0;
  return { number1, number2 };
}

// Function to display result in the #calculation-result span
function displayResult(result) {
  document.getElementById('calculation-result').textContent = result;
}

// Attach event listeners for each arithmetic operation

// Addition
document.getElementById('add').addEventListener('click', function() {
  const { number1, number2 } = getInputValues();
  const result = add(number1, number2);
  displayResult(result);
});

// Subtraction
document.getElementById('subtract').addEventListener('click', function() {
  const { number1, number2 } = getInputValues();
  const result = subtract(number1, number2);
  displayResult(result);
});

// Multiplication
document.getElementById('multiply').addEventListener('click', function() {
  const { number1, number2 } = getInputValues();
  const result = multiply(number1, number2);
  displayResult(result);
});

// Division
document.getElementById('divide').addEventListener('click', function() {
  const { number1, number2 } = getInputValues();
  const result = divide(number1, number2);
  displayResult(result);
});
