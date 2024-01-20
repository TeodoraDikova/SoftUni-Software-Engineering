function solve(commands) {
    let nums = commands[0]
        .split(' ')
        .map(Number);

        for (let i = 0; i < commands.length; i++) {
            let [command, firstNum, secondNum] = commands[i].split(' ');
            firstNum = Number(firstNum);
            secondNum = Number(secondNum);

            if (command == 'Finish'){
                continue;
            } else if (command == 'Add') {
                nums.push(firstNum);
            } else if (command == 'Remove') {
                index = nums.indexOf(firstNum);
                nums.splice(index, 1);
            } else if (command == 'Replace') {
                index = nums.indexOf(firstNum);
                nums.splice(index, 1, secondNum);
            } else if (command == 'Collapse') {
                nums = nums.filter((num) => num >= firstNum);
            }
                
        }
    console.log(nums.join(' '));
}
solve(["1 20 -1 10", "Collapse 8", "Finish"]);