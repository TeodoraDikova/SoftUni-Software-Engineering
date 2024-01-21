function sumOfNumsNtoM(n, m) {
    let result = 0;
    let startNum = Number(n);
    let endNum = Number(m);

    for (let i = startNum; i <= endNum; i++) {
        result += i;
    }

    return result;
}