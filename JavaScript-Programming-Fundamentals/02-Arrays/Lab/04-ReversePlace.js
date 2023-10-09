function reversePlaces(arr){
    //First solution:

    // for(let i = 0; i < arr.length / 2; i++){
    //     let oldEl = arr[i];
    //     let previousIndex = arr.length - 1 - i;
    //     arr[i] = arr[previousIndex];
    //     arr[previousIndex] = oldEl;
    // }

    // console.log(arr.join(' '));

    
    //Second solution:

    console.log(String(arr.reverse().join(" ")));
}

reversePlaces(['a', 'b', 'c', 'd', 'e']);