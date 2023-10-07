function arrayRotation(arr,rotationsCount){
    
    for(rotation = 1; rotation <= rotationsCount; rotation ++){
        let firstEl = arr.shift();
        arr.push(firstEl);
    }

    console.log(arr.join(' '));
}
