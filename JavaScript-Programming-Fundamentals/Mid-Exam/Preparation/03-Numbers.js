function solve (str) {
    let strAsNums = str.split(' ').map(Number);
    let avg = (strAsNums.reduce((acc, val) => acc += val)) / strAsNums.length;
    let result = [];

    for (let num of strAsNums) {
        if (num > avg) {
            result.push(num)
        }
    }

    let top5Nums = result.sort((a, b) => b - a).slice(0, 5);

    if (top5Nums.length === 0) {
        console.log('No');
    } else {
        console.log(top5Nums.join(' '));
    }
}
solve('5 2 3 4 -10 30 40 50 20 50 60 60 51');