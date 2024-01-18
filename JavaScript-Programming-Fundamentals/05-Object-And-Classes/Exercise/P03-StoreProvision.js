function storeProvision(curStockArr, orderedStockArr) {
    let stock = {};

    for (let i = 0; i < curStockArr.length; i += 2) {
        let productName = curStockArr[i];
        let qnty = Number(curStockArr[i + 1]);
        stock[productName] = qnty;
    }

    for (let i = 0; i < orderedStockArr.length; i += 2) {
        let productName = orderedStockArr[i];
        let qnty = Number(orderedStockArr[i + 1]);

        if (productName in stock) {
            stock[productName] += qnty;
        } else {
            stock[productName] = qnty;
        }
    }

    let kvps = Object.entries(stock);

    for (let kvp of kvps) {
        console.log(kvp.join(" -> "));
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ], 
    [ 
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 
    'Tomatoes', '70', 'Bananas', '30' 
    ]);