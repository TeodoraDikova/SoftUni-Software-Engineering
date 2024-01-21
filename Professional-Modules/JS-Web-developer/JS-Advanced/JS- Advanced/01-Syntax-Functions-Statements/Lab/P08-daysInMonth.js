function getNumsOfDaysInMonth(month, year) {
    let lastDayOfMonth = new Date(year, month, 0).getDate();

    return lastDayOfMonth;
}