function maxNumber(arr){
    let topNums = [];

    for(i = 0; i < arr.length; i++){
        let num = arr[i];
        isTop = true;

        for(j = i + 1; j < arr.length; j++){
            let rightNum = arr[j];

            if(num <= rightNum){
                isTop = false;
                break;
            }
        }

        if(isTop){
            topNums.push(num);
        }
    }
    
    console.log(topNums.join(' '))
}
