function smallestTwoNums (arr) {

    let sortedArr = arr.sort((a, b) => {
        return a - b;
    })

    console.log((arr.slice(0, 2)).join(" "));
}
