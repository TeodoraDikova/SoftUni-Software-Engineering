function solve(command){
    let curCommand = command.shift();
    let priceNoTax = 0;

    while (curCommand != 'regular' && curCommand != 'special') {
        curCommand = Number(curCommand);

        if (curCommand <= 0) {
            console.log('Invalid price!')
        }else {
            priceNoTax += curCommand;
        }

        curCommand = command.shift();
    }

    if (priceNoTax == 0) {
        console.log('Invalid order!');
    } else {
        let tax = priceNoTax * 0.2;
        let totalPrice = priceNoTax + tax;

        if (curCommand == 'special') {
            totalPrice = totalPrice * 0.9;
        }
        console.log('Congratulations you\'ve just bought a new computer!');
        console.log(`Price without taxes: ${priceNoTax.toFixed(2)}$`);
        console.log(`Taxes: ${tax.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }
}
solve([
    'regular'
    ])
    ;