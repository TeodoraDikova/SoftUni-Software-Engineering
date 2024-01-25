function lowestPrices (input) {
    let result = {};

    for (let iterator of input) {
        let [town, product, price] = iterator.split(' | ');
        price = Number(price);
        

        if (!result.hasOwnProperty(product)) {
            result[product] = { town, price };
        } else {
            if (result[product].price > price) {
                result[product].price = price;
                result[product].town = town;
            }
        }
    }
    for (let product in result) {
        console.log(`${product} -> ${result[product].price} (${result[product].town})`);
    }
}
lowestPrices (
['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);