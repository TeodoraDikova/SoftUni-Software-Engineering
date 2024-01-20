function furiture (input) {
    let validFurnitures = [];

    let pattern = />>(?<furnitureName>[A-Z][A-za-z]+)<<(?<price>\d+\.*\d*)!(?<qnty>\d+)/gs;

    let match = pattern.exec(input);

    while (match) {
        
        let {furnitureName, price, qnty} = match.groups;

        let furniturePrice = Number(price) * Number(qnty);

        validFurnitures.push(furnitureName);
        validFurnitures.push(furniturePrice)

        match = pattern.exec(input);
    }

    console.log('Bought furniture:');

    let totalPrice = 0;
    
    if (validFurnitures.length > 0) {
        for (let i = 0; i < validFurnitures.length; i += 2) {
        
            let furnitureName = validFurnitures[i];
            let furniturePrice = validFurnitures[i + 1];

            totalPrice += Number(furniturePrice);

            console.log(furnitureName);
        }
    }

    console.log (`Total money spend: ${totalPrice.toFixed(2)}`)
}

furiture (['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']);