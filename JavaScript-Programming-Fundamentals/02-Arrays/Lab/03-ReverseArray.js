function reverseArr(n, arr){
    let newArr = [];
    let result = "";

    for(i = 0; i < n; i++){
        newArr.push(arr[i]);
    }

    for(j = newArr.length - 1; j >= 0; j--){
        result += newArr[j] + " "
    }

    console.log(result);
}
