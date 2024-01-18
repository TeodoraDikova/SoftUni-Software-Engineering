function storege (arr) {
    let map = new Map();

    for (let items of arr) {
        let tokens = items.split(' ');
        let product = tokens[0];
        let qnty = Number(tokens[1]);

        if (map.has(product)) {
            map.set(product, map.get(product) + qnty);
        } else {
            map.set(product, qnty);
        }
    }

    for (let kvp of map) {
        console.log(kvp[0], '->', kvp[1]);
    }

}
storege(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);