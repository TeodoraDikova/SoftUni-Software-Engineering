function equalArrs(arr1, arr2){

    let isEqual = true;
    let sum = 0;

    for(i = 0; i < arr1.length; i++){
        arr1[i] = Number(arr1[i]);
        sum += arr1[i];
    }

    for(i = 0; i < arr2.length; i++){
        arr2[i] = Number(arr2[i]);
    }

    for(j = 0; j < arr1.length; j++){

        if(arr1[i] != arr2[i]){
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isEqual = false;
            break;
        }
    }

    if(isEqual){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArrs(['10','20','30'], ['10','20','30']);