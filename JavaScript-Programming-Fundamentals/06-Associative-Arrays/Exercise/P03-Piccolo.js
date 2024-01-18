function piccolo (arr) {
    let parking = {};

    for (let i = 0; i < arr.length; i ++) {
        let [direcion, carNumber] = arr[i].split(', ');

        if (direcion == 'IN') {
            parking[carNumber] = true;
        } else if (parking[carNumber] && direcion == 'OUT'){
            delete parking[carNumber];
        }
    }

    let sortedCars = Object.keys(parking).sort((a, b) => a.localeCompare(b));

    if (sortedCars.length > 0) {
        console.log(sortedCars.join('\n'));
    } else {
        confirm.log(('Parking Lot is Empty'));
    }
}
piccolo (['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);