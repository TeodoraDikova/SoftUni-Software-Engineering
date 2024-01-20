function barIncome(input) {
    let command = input.shift();

    let totalIncome = 0;

    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+\.?\d*)\$/;

    while (command !== 'end of shift') {
        let match = command.match(pattern);

        if (match) {
            let { name, product, count, price } = match.groups;
            let productSum = Number(count) * Number(price);

            totalIncome += productSum;

            console.log(`${name}: ${product} - ${productSum.toFixed(2)}`);
        }
        command = input.shift();
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
barIncome(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']);