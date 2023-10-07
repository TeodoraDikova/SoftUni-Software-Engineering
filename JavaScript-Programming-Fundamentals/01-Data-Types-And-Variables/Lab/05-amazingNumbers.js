function amazingNumbers (num){
    let numToStr = String(num);
    let sum = 0;

    for(i = 0; i < numToStr.length; i++){
        sum += Number(numToStr[i]);
    }

    if (sum % 10 == 9){
        console.log(`${num} Amazing? True`)
    }else {
        console.log(`${num} Amazing? False`)
    }
    
}
