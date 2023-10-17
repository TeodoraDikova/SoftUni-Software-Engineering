function processOddIndex(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let doubledNum = 0;

        if (!(i % 2 == 0)) {
        doubledNum = Number(arr[i]) * 2;
        result.unshift(doubledNum);
        }
    }

    console.log(result.join(" "));
}