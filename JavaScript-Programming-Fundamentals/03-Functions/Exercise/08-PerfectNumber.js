function checkIsPerfect (num) {
    let sumOfDevisors = 0;

    for (let curNum = 1; curNum < num; curNum++) {

        if (num % curNum == 0) {
            sumOfDevisors += curNum;
        } else {
            continue;
        }
    }

    if (sumOfDevisors == num) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.")
    }
}