function addAndSubtract(arr){
    let arrSum = 0;
    let newArrSum = 0;

    for( i = 0; i < arr.length; i ++){
        let num = arr[i];
        arrSum += num
        
        if(num % 2 == 0){
            num += i;
        }else{
            num -= i;
        }

        newArrSum += num;
        arr[i] = num;
    }
    
    console.log(arr);
    console.log(arrSum);
    console.log(newArrSum);
}
