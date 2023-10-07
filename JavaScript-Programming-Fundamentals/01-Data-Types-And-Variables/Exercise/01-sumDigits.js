function sumDigits(num){
    let numAsStr = String(num);
    let sum = 0;

    for(i = 0; i < numAsStr.length; i++){
        sum += Number(numAsStr[i]);
    }

    console.log(sum);
}
