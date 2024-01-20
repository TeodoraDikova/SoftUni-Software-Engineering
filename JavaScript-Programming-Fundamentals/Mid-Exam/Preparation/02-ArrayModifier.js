function solve (input) {
    let arr = input.shift().split(' ').map(Number);

    for (let command of input) {
        if (command == 'end') {
            break;
        }

        let [action, index1, index2] = command.split(' ');
        index1 = Number(index1);
        index2 = Number(index2);

        if (action == 'swap') {
            let tempNum = arr[index1];
            arr[index1] = arr[index2];
            arr[index2] = tempNum;
        } else if (action == 'multiply') {
            arr[index1] *= arr[index2];
        } else if (action == 'decrease') {
            arr = arr.map(nums => nums - 1);
        }
    }

    console.log(arr.join(', '))
}
solve([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
  );