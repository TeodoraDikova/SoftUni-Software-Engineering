function averageStrLength(text1, text2, text3) {
    let sumLength = Number(text1.length) + Number(text2.length) + Number(text3.length);
    let avgLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(avgLength);
}

averageStrLength('chocolate', 'ice cream', 'cake');