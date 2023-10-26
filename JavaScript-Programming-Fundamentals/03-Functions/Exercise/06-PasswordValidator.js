function passwordValidator(pass){
   let isValidForSymbol = true;
   let isValidForLength = false;
   let digitCount = 0;

   if(pass.length > 5 && pass.length < 11){
    isValidForLength = true;
   }
   
   for(let i = 0; i < pass.length; i ++){
    let curSymbol = pass.charCodeAt(i);

    if(
        !(
            (curSymbol >= 48 && curSymbol <= 57) ||
            (curSymbol >= 65 && curSymbol <= 90) ||
            (curSymbol >= 97 && curSymbol <= 122)
        )
    ) {
        isValidForSymbol = false;
        break;
    }

    if(curSymbol >= 48 && curSymbol <= 57){
        digitCount += 1;
    }
   }

    if (!isValidForLength || !isValidForSymbol || digitCount < 2) {
    
        if (!isValidForLength) {
            console.log("Password must be between 6 and 10 characters");
            }
            if (!isValidForSymbol) {
                console.log("Password must consist only of letters and digits");
            }
            if (digitCount < 2) {
                console.log("Password must have at least 2 digits");
            }
    } else {
        console.log("Password is valid");
    } 
}

passwordValidator('MyPass123');