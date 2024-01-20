function messageTranslator(arr){
    let rows = Number(arr.shift());

    let pattern = /!(?<command>[A-Z][a-z]{2,})!:\[(?<letters>[A-Za-z]{8,})]/g;

    for (let i = 0; i < rows; i++) {
        let rowCommand = arr.shift();
        let result = pattern.exec(rowCommand);

        if (result) {
            let commandName = result.groups.command;
            let letters = result.groups.letters;

            let asciiNums = [];

            for (let j = 0; j < letters.length; j++) {
                let char = letters.charAt(j);
                let asciiValue = char.charCodeAt(0);
                asciiNums.push(asciiValue);
            }

            console.log(`${commandName}: ${asciiNums.join(' ')}`);
        } else {
            console.log('The message is invalid');
        }
    }
}

messageTranslator(['1', '!Send!:[IvanisHere]']);
