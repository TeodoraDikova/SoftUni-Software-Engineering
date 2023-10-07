function equalSum(arr){
    let result = 'no';

    for(i = 0; i < arr.length; i++){
        let leftSum = 0;
        let rightSum = 0;

        for(j = 0; j < i; j++){
            leftSum += arr[j];
        }

        for(k = j + 1; k < arr.length; k++){
            rightSum += arr[k];
        }

        if( rightSum == leftSum ){
            result = i;
            break;
        }
    }
    
    console.log(result);
}
