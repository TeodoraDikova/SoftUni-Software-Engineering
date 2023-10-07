function maxSequence(arr){
    let longestSeq = [];

    for(i = 0; i < arr.length; i ++){
        let num = arr[i];
        let currentSeq = [num];

        for(j = i + 1; j < arr.length; j++){
            rightNum = arr[j];

            if(rightNum == num){
                currentSeq.push(rightNum);
            }else{
                break;
            }  
        }

        if(currentSeq.length > longestSeq.length){
            longestSeq = currentSeq;
        }  
    }

    console.log(longestSeq.join(' '));
}
