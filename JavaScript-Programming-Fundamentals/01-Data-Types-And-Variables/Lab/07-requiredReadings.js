function solve (bookPages, pagesPerHour, days){
    let totalHours = bookPages / pagesPerHour;
    let hourPerDay = totalHours / days;

    console.log(`${hourPerDay}`);
}

solve(212,
    20 ,
    2);