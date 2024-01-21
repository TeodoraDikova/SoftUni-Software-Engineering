function findLargestNum(num1, num2, num3) {
    let largestNum = -Infinity;

    if (num1 > largestNum) {
        largestNum = num1;
    } 
    if (num2 > largestNum) {
        largestNum = num2;
    }
    if (num3 > largestNum) {
        largestNum = num3;
    }

    console.log(`The largest number is ${largestNum}.`);
}

findLargestNum(5, -3, 16);
findLargestNum(-3, -5, -22.5);