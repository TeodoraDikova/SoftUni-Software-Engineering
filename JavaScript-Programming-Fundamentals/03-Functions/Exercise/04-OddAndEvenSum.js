function sumEvenAndOddDigits(number) {
    let evenSum = 0;
    let oddSum = 0;
  
   let numberStr = String(number);
  
    for (let i = 0; i < numberStr.length; i++) {
        let digit = Number(numberStr[i]);
      
        if (digit % 2 == 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
    }
  
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}
console.log(sumEvenAndOddDigits(1000435));