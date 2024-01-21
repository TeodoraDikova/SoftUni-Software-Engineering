function findGCD(num1, num2) {
    while (num2 !== 0) {
        const GCD = num2;
        num2 = num1 % num2;
        num1 = GCD;
    }

    console.log(num1);
}

findGCD(2154, 458);