function checkSameNumbers(num) {
    const numAsStr = num.toString();
    
    const allSame = numAsStr.split('').every(digit => digit === numAsStr[0]);
    
    const sumOfDigits = numAsStr.split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);

    console.log(allSame);
    console.log(sumOfDigits);
}

// Examples
checkSameNumbers(2222222);
checkSameNumbers(1234);