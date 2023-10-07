function magicSum(arr, magicSum){

    for(i = 0; i < arr.length; i ++){

        for(k = i + 1; k < arr.length; k++){

            if(arr[i] + arr[k] == magicSum){
                console.log(`${arr[i]} ${arr[k]}`);
            } 
        }
    }
}
