function printNumberTriangle(n) {
    let result = '';
    let currentNumber = 1;
    
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            result += currentNumber;
            if (j < i) {
                result += ' ';
            }
            currentNumber++;
        }
        result += '\n';
    }
    
    return result;
}

module.exports = { printNumberTriangle };
// господипомогииии