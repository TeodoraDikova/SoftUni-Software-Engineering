function arrayOperations(inputArray) {
    // Sum(ai)
    let sum = inputArray.reduce((acc, current) => acc + current, 0);
    console.log(sum);

    // Sum(1/ai)
    let inverseSum = inputArray.reduce((acc, current) => acc + 1 / current, 0);
    console.log(inverseSum);

    // Concat(ai)
    let concatString = inputArray.join('');
    console.log(concatString);
}