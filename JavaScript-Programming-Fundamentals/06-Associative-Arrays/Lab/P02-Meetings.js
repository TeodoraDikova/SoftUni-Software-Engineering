function meetings (arr) {
    let meetings = {};

    for (let items of arr) {
        let [day, name] = items.split(' ');

        if(meetings[day]) {
            console.log(`Conflict on ${day}!`)
            continue;
        }
        meetings[day] = name;
        console.log(`Scheduled for ${day}`)
    }

    for (let day in meetings) {
        console.log(`${day} -> ${meetings[day]}`)
    }
}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])