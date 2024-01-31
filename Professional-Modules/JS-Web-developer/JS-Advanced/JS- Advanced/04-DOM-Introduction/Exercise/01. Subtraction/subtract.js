function subtract() {
    let subtractResult = 0;

    let firstNumber = parseFloat(document.getElementById("firstNumber").value);
    let secondNumber = parseFloat(document.getElementById("secondNumber").value);

    subtractResult = firstNumber - secondNumber;

    document.getElementById("result").textContent = subtractResult;

    console.log(subtractResult);
}