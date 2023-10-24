function searchForNumber(arr1, arr2) {
    let takeCount = arr2[0];
    let deleteCount = arr2[1];
    let searchNum = arr2[2];

    let takenEls = arr1.slice(0, takeCount);
    takenEls.splice(0, deleteCount);

    let equalNumCount = 0;

    for (let i = 0; i < takenEls.length; i++) {
        if (takenEls[i] === searchNum) {
            equalNumCount += 1;
        }
    }

    console.log(`Number ${searchNum} occurs ${equalNumCount} times.`);
}
searchForNumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);