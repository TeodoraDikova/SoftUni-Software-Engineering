function solve(inputArr) {
    let biscuitsPerDayPerPerson = Number(inputArr.shift());
    let countPeople = Number(inputArr.shift());
    let biscuitsPer30Days = Number(inputArr.shift());
    let productionFor30Days = 0;

    for (let i = 1; i <= 30; i ++) {
        let biscuitsPerDay = 0;

        if (i % 3 == 0) {
        biscuitsPerDay = (biscuitsPerDayPerPerson * countPeople) * 0.75;
        } else {
            biscuitsPerDay = biscuitsPerDayPerPerson * countPeople;
        }
        
        productionFor30Days += Math.floor(biscuitsPerDay);
    }

    console.log(`You have produced ${productionFor30Days} biscuits for the past month.`);

    let percentOfBiscuits = Math.abs(productionFor30Days - biscuitsPer30Days) / biscuitsPer30Days * 100;

    if (productionFor30Days > biscuitsPer30Days) {
        console.log(`You produce ${percentOfBiscuits.toFixed(2)} percent more biscuits.`)
    } else {
        console.log(`You produce ${percentOfBiscuits.toFixed(2)} percent less biscuits.`)
    }
}
solve(["78", "8", "16000"]);