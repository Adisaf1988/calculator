class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const calculator = new Calculator();
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const operatorSelect = document.getElementById('calculatorSelect');
    const resultDiv = document.getElementById('result');
    const calculateBtn = document.getElementById('calculateBtn');

    calculateBtn.addEventListener('click', () => {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const operator = operatorSelect.value;

        let result;
        try {
            switch (operator) {
                case '+':
                    result = calculator.add(num1, num2);
                    break;
                case '-':
                    result = calculator.subtract(num1, num2);
                    break;
                case '×':
                    result = calculator.multiply(num1, num2);
                    break;
                case '÷':
                    result = calculator.divide(num1, num2);
                    break;
                default:
                    result = 'Invalid operator';
            }
            resultDiv.textContent = `Result: ${result}`;
        } catch (error) {
            resultDiv.textContent = `Error: ${error.message}`;
        }
    });
});
