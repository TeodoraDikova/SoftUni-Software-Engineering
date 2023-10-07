function echo(input){
    let typeCheck = typeof input;
    console.log(typeCheck);

    if (typeCheck == 'string' || typeCheck == 'number'){
       console.log(input);
    }else {
        console.log('Parameter is not suitable for printing');
    }   
}
