function printTownPopulation (arr) {
    let townInfo = {};

    for (let i = 0; i < arr.length; i++) {
        let [town, population] = arr[i].split(' <-> ');

        if (townInfo.hasOwnProperty(town)) {
            townInfo[town] += Number(population);
        } else {
            townInfo[town] = Number(population);
        }
    }

    for (let [town, population] of Object.entries(townInfo)) {
        console.log(`${town} : ${population}`);
    }
}
printTownPopulation(
['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);