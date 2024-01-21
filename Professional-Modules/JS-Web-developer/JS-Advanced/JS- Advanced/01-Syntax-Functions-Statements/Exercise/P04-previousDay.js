function calculatePreviousDay(year, month, day) {
    const currentDate = new Date(year, month - 1, day); // Month is 0-indexed in JavaScript dates
    const previousDay = new Date(currentDate);
    previousDay.setDate(currentDate.getDate() - 1);

    const formattedDate = `${previousDay.getFullYear()}-${previousDay.getMonth() + 1}-${previousDay.getDate()}`;
    
    return formattedDate;
}

// Examples
console.log(calculatePreviousDay(2016, 9, 30));
console.log(calculatePreviousDay(2015, 5, 10));