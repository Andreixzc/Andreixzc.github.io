document.getElementById('conversion-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const numberInput = document.getElementById('number');
    const baseSelect = document.getElementById('base');
    const resultDiv = document.getElementById('result');
    
    const number = numberInput.value;
    const base = baseSelect.value;
    
    let convertedNumber;
    
    switch (base) {
        case 'bin':
            convertedNumber = convertToBinary(number);
            break;
        case 'oct':
            convertedNumber = convertToOctal(number);
            break;
        case 'dec':
            convertedNumber = number;
            break;
        case 'hex':
            convertedNumber = convertToHexadecimal(number);
            break;
        default:
            convertedNumber = 'Invalid base';
    }
    
    resultDiv.textContent = `Número convertido: ${convertedNumber}`;
});

function convertToBinary(decimalNumber) {
    return convertBase(decimalNumber, 2);
}

function convertToOctal(decimalNumber) {
    return convertBase(decimalNumber, 8);
}

function convertToHexadecimal(decimalNumber) {
    return convertBase(decimalNumber, 16).toUpperCase();
}   

function convertBase(decimalNumber, base) {
    const digits = '0123456789ABCDEF';
    let result = '';
    let quotient = decimalNumber;
    //23 8
    
    while (quotient > 0) {
        const remainder = quotient % base;
        result = digits[remainder] + result;
        quotient = Math.floor(quotient / base);
    }
    
    return result === '' ? '0' : result;
}
