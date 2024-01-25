function calc() {
    let num1 = document.getElementById("num1").value; // 1. Select element having Id = num1, 2. Get element value
    let num2 = document.getElementById("num2").value; // 1. Select element having Id = num2, 2. Get element value

    let sum = Number(num1) + Number(num2);

    document.getElementById("sum").value = sum; // Setting value
}
