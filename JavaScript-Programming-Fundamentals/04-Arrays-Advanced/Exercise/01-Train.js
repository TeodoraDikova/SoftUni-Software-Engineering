function train(arr) {
    let wagons = arr.shift()
        .split(' ')
        .map(Number);
    let maxCapacity = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];

        if (command.includes('Add')) {
            let passengersToAdd = Number(command.split(' ')[1]);
            wagons.push(passengersToAdd);
        } else {
            let passengersToBoard = Number(command);

            for (let j = 0; j < wagons.length; j++) {
                let availableSpace = maxCapacity - wagons[j];

                if (passengersToBoard <= availableSpace) {
                    wagons[j] += passengersToBoard;
                    break;
                }
            }
        }
    }

    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
