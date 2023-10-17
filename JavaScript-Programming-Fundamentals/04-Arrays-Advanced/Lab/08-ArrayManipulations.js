function manipulateArray(commands) {
    let arr = commands[0]
        .split(' ')
        .map(Number);

    for (let i = 0; i < commands.length; i++) {
        let [command, firstNum, secondNum] = commands[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        if (command == 'Add') {
                arr.push(firstNum);
        } else if (command == 'Remove') {
            arr = arr.filter(num => num !== firstNum);
        } else if (command == 'RemoveAt') {
                arr.splice(firstNum, 1);
        } else if (command == 'Insert') {
                arr.splice(secondNum, 0, firstNum);
            
        }
    }

    console.log(arr.join(' '));
}
