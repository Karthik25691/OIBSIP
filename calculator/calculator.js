document.addEventListener('DOMContentLoaded', () => {
    const resultDisplay = document.getElementById('result');
    const historyDisplay = document.getElementById('history');
    let currentInput = '';
    let previousInput = '';
    let operator = '';
    let shouldResetDisplay = false;

    const updateDisplay = () => {
        resultDisplay.textContent = currentInput || '0';
        historyDisplay.textContent = previousInput + ' ' + operator;
    };

    const clear = () => {
        currentInput = '';
        previousInput = '';
        operator = '';
        updateDisplay();
    };

    const deleteLast = () => {
        currentInput = currentInput.slice(0, -1);
        updateDisplay();
    };

    const appendNumber = (number) => {
        if (shouldResetDisplay) {
            currentInput = '';
            shouldResetDisplay = false;
        }
        if (number === '.' && currentInput.includes('.')) return;
        currentInput = currentInput.toString() + number.toString();
        updateDisplay();
    };

    const chooseOperator = (op) => {
        if (currentInput === '' && op !== '%') return;
        if (previousInput !== '') {
            calculate();
        }
        operator = op;
        previousInput = currentInput;
        currentInput = '';
        shouldResetDisplay = false;
        updateDisplay();
    };

    const calculate = () => {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);
        if (isNaN(prev) || isNaN(current)) return;
        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            case '%':
                result = prev % current;
                break;
            default:
                return;
        }
        currentInput = result.toString();
        operator = '';
        previousInput = '';
        shouldResetDisplay = true;
        updateDisplay();
    };

    document.querySelectorAll('.number').forEach(button => {
        button.addEventListener('click', () => {
            appendNumber(button.textContent);
        });
    });

    document.querySelectorAll('.operator').forEach(button => {
        button.addEventListener('click', () => {
            if (button.id === 'equals') {
                calculate();
            } else {
                chooseOperator(button.textContent);
            }
        });
    });

    document.getElementById('clear').addEventListener('click', clear);
    document.getElementById('delete').addEventListener('click', deleteLast);
    document.getElementById('decimal').addEventListener('click', () => {
        appendNumber('.');
    });
});
