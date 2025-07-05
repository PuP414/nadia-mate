const resultInput = document.getElementById('result');
let currentExpression = '';

function appendToDisplay(value) {
    currentExpression += value;
    resultInput.value = currentExpression;
}

function clearResult() {
    currentExpression = '';
    resultInput.value = '';
}

function calculateResult() {
    try {
        // Replace custom operators with standard JavaScript operators
        let expression = currentExpression.replace(/(\d+)\^2/g, 'Math.pow($1, 2)')
                                            .replace(/(\d+)\^3/g, 'Math.pow($1, 3)')
                                            .replace(/√(\d+(\.\d+)?)/g, 'Math.sqrt($1)');
        
        // Evaluate the expression
        let result = eval(expression);
        resultInput.value = result;
        currentExpression = result.toString(); // Set current expression to the result for further calculations
    } catch (error) {
        resultInput.value = 'Error';
        currentExpression = '';
    }
}

function square() {
    appendToDisplay('^2'); // Append custom operator for squaring
}

function cube() {
    appendToDisplay('^3'); // Append custom operator for cubing
}

function sqrt() {
    appendToDisplay('√'); // Append custom operator for square root
}