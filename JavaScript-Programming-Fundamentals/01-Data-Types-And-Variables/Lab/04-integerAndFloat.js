function intAndFloatSum(num1, num2, num3){
    let sum = num1 + num2 + num3;

    console.log(sum % 1 === 0? sum += ' - Integer': sum += ' - Float');
}
 