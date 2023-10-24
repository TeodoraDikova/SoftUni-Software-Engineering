function sorting(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let resultArr = [];

    while (sortedArr.length > 0) {
        let maxNum = sortedArr.pop();
        let minNum = sortedArr.shift();

        resultArr.push(maxNum);
        resultArr.push(minNum)
    }
    console.log(resultArr.join(" "));
}