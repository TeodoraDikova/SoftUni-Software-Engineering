function factorialDevisions(num1, num2) {
    let sum1 = 1;
    let sum2 = 1

    for (let curNum = num1; curNum > 1; curNum--) {
        sum1 *= curNum;
    }

    for (let curNum = num2; curNum > 1; curNum--) {
        sum2 *= curNum;
    }

    console.log((sum1 / sum2).toFixed(2));
}