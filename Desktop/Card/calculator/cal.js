//calculator.js

let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number){
    currentInput += number;
    updateDisplay();
}
function appendOperator(selectedOperator) {
    if (currentInput !== '') {
        operator = selectedOperator;
        previousInput = currentInput;
        currentInput = '';
        updateDisplay();
    }
}

function calculateResult() {
    if (currentInput !== '' && previousInput !== '') {
        const result = operate(parseFloat(previousInput), parseFloat(currentInput), operator);
        currentInput = result.toString();
        operator = '';
        previousInput = '';
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    previousInput = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

function operate(a, b, operation) {
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : 'Error';
        default:
            return 'Error';
    }
}






