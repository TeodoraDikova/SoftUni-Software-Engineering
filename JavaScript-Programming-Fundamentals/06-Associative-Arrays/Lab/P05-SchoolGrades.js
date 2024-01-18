function schoolGrades(input) {
    let students = {};

    for (let items of input) {
        let tokens = items.split(' ');
        let name = tokens[0];
        let grades = tokens.slice(1).map(Number);

        if (!students[name]) {
            students[name] = [];
        }

        students[name] = students[name].concat(grades);
    }
    
    let sortedStudents = Object.keys(students).sort((a, b) => a.localeCompare(b));

    for (let student of sortedStudents) {
        let averageGrade = (students[student].reduce((a, b) => a + b, 0) / students[student].length).toFixed(2);
        console.log(`${student}: ${averageGrade}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']);