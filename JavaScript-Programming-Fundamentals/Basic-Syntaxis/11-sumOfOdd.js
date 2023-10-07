function sumOfOdd(input){
    let sum = 0;
    
    for(let i = 1; i <= input * 2; i += 2){
        let num = i;
        sum += i;

        console.log (num);
    }

    console.log(`Sum: ${sum}`);
}