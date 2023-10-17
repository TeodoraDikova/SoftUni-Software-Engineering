function firstAndLastKNums(arr) {
    let elK = Number(arr.splice(0, 1));
    let firstEls = (arr.slice(0, elK)).join(" ");
    let lastEls = arr.slice(arr.length - elK, arr.length).join(" ");

    console.log(firstEls);
    console.log(lastEls);
}
