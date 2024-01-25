function storageCatalogue(input) {
    let result = {};

    input.sort((a, b) => a.localeCompare(b));

    for (let iterator of input) {
        let [productName, productPrice] = iterator.split(' : ');
        productPrice = Number(productPrice);
        
        let firstLetter = productName.charAt(0);

        if (result.hasOwnProperty(firstLetter)){
            result[firstLetter].push({productName, productPrice});
        } else {
            result[firstLetter] = [{productName, productPrice}];
        }
    }

    for (let key in result) {
        console.log(key);
        result[key].forEach(product => {
            console.log(`${product.productName}: ${product.productPrice}`)  
        });
    }
}
storageCatalogue(
['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);