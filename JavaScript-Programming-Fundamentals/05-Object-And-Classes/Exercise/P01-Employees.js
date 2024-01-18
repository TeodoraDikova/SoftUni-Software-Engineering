function employees (arr) {

    for(let employee of arr) {
        let person = {};
        person.personName = employee;
        person.personalNum = Number(employee.length);

        console.log(`Name: ${person.personName} -- Personal Number: ${person.personalNum}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
     ]);