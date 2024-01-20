function cutAndReverse (str) {
    let middleIndx = str.length / 2;

    let leftSide = str.slice (0, middleIndx).split('').reverse().join('');
    let rigthSide = str.slice (middleIndx).split('').reverse().join('');

    console.log(leftSide);
    console.log(rigthSide);
}