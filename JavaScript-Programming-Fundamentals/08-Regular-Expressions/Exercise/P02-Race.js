function race(input) {
    let names = input.shift().split(', ');
    let command = input.shift();

    let result = {};

    names.forEach(name => result[name] = 0);

    let letterPattern = /[A-Za-z]/g;
    let digitPattern = /\d/g;

    while (command !== 'end of race') {
        let letterMatches = command.match(letterPattern);
        let name = letterMatches.join('');

        let digitMatches = command.match(digitPattern);
        let distance = digitMatches.map(Number).reduce((acc, val) => acc + val, 0);

        if (name in result) {
            result[name] += distance;
        } 

        command = input.shift();
    }

    let sortedResult = Object.entries(result).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sortedResult[0][0]}`);
    console.log(`2nd place: ${sortedResult[1][0]}`);
    console.log(`3rd place: ${sortedResult[2][0]}`);
}

race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']);