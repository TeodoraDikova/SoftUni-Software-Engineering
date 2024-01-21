function calculateMoneyPerFruit(fruitName, weigthGr, pricePerKg) {
    const weigthKg = weigthGr / 1000;
    const neededMoney = weigthKg * pricePerKg;

    console.log(`I need $${neededMoney.toFixed(2)} to buy ${weigthKg.toFixed(2)} kilograms ${fruitName}.`)
}

calculateMoneyPerFruit('orange', 2500, 1.80);