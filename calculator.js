// Function to handle input from the calculator buttons
function inputing(value) {
    // Append the value of the button pressed to the display
    document.getElementById('display').value += value;
}

// Function to calculate the result of the expression in the display
function calculate() {
    try {
        // Evaluate the expression and update the display with the result
        document.getElementById('display').value = eval(document.getElementById('display').value);
    }
    catch (error) {
        // If there is an error (e.g., invalid expression), display "ERROR"
        document.getElementById('display').value = "ERROR";
    }
}

// Function to clear the display
function clearDisplay() {
    // Set the display value to an empty string
    document.getElementById('display').value = "";
}

// Function to calculate the square of the current value in the display
function calculateSquare() {
    // Evaluate the expression, square the result, and update the display
    document.getElementById('display').value = Math.pow(
        eval(document.getElementById('display').value), 2
    );
}

// Function to calculate the square root of the current value in the display
function calculateSquareRoot() {
    // Evaluate the expression, find the square root, and update the display
    document.getElementById('display').value = Math.sqrt(
        eval(document.getElementById('display').value)
    );
}

// Function to calculate the percentage of the current value in the display
function calculatePersentage() {
    // Evaluate the expression, divide by 100, and update the display
    document.getElementById('display').value = (
        eval(document.getElementById('display').value) / 100
    );
}
