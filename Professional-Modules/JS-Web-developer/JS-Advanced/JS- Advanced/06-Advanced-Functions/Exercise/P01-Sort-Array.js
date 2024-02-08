function sortArray(arr, argument) {
    let sorter = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a
    };

    return arr.sort(sorter[argument]);
}

sortArray([14, 7, 17, 6, 8], 'asc');