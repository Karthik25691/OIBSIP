function convertTemperature() {
    const degrees = parseFloat(document.getElementById('degrees').value);
    const type = document.getElementById('type').value;
    let result;

    if (isNaN(degrees)) {
        document.getElementById('result').value = 'Invalid input';
        return;
    }

    if (type === 'Fahrenheit') {
        
        result = (degrees * 9 / 5) + 32;
        document.getElementById('result').value = result.toFixed(4) + ' °F';
    } else if (type === 'Celsius') {
        result = (degrees - 32) * 5 / 9;
        document.getElementById('result').value = result.toFixed(4) + ' °C';
    }
}
