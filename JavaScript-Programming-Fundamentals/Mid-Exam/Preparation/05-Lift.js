function solve(inputArr) {
    let countTourists = Number(inputArr.shift());
    let wagons = inputArr.shift().split(' ').map(Number);

    for (let i = 0; i < wagons.length; i++) {
        let curWagon = wagons[i];
        let availableSpace = 4 - curWagon;

        if (countTourists == 0) {
            break;
        }

        
        let peopleToAdd = Math.min(availableSpace, countTourists);
        curWagon += peopleToAdd;
        countTourists -= peopleToAdd;
        wagons[i] = curWagon;
        
    }

    if (countTourists <= 0) {
        console.log(`The lift has empty spots!`);
    } else {
        console.log(`There isn't enough space! ${countTourists} people in a queue!`);
    }

    console.log(wagons.join(' '));
}
solve([
    "15",
    "0 0 0 0 0"
   ]
   );