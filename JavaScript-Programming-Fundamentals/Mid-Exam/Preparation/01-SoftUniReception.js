function solve(arr) {
    let toHelp = arr.slice(0, 3).map(Number).reduce((acc, val) => acc += val);
    let studentsCount = Number(arr.pop());
    let neededHours = 0;
    

    while (studentsCount > 0) {
        neededHours += 1;
        studentsCount -= toHelp;

        if (neededHours % 4 == 0) {
            neededHours += 1;
        }
    }

    console.log(`Time needed: ${Math.floor(neededHours)}h.`);
}

solve(['3','2','5','40']);