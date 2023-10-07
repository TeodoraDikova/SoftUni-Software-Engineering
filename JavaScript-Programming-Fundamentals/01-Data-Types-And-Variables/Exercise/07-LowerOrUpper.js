function lowerOrUpper (char){
   let num = char.charCodeAt();

    if (num >= 65 && num <= 90){
        console.log('upper-case');
    }else if (num >= 97 && num <=122){
        console.log('lower-case')
    }
    
}
