function sumAndSubtract(num1, num2, num3){
  let resultOfSum = sum(num1, num2);
  let resultOfSubtract = subtract(resultOfSum, num3);

    function sum(num1, num2){
        return num1 + num2;
    }

    function subtract(num1, num2){
        return num1 - num2;
    }

    console.log(resultOfSubtract);
}

sumAndSubtract(23, 6, 10);