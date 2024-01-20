function solve(commands) {
    let existPhones = commands.shift().split(', ');

    while (commands[0] !== 'End') {
        let currentItem = commands.shift();
        let [command, checkPhone] = currentItem.split(' - ');

        for (let curPhone of existPhones) {

            if (command.includes('Add')) {

                if (!existPhones.includes(checkPhone)) {
                    existPhones.push(checkPhone);
                }

            } else if (command.includes('Remove')) {
                existPhones = existPhones.filter(phone => phone !== checkPhone);

            } else if (command.includes('Bonus phone')) {

                if (checkPhone.includes(':')) {

                    checkPhone = checkPhone.split(':');
                    let oldPhone = checkPhone.shift();
                    let newPhone = checkPhone.pop();
                    let index = existPhones.indexOf(oldPhone);

                        existPhones.splice(index + 1, 0, newPhone);     
                }
            } else if (command.includes('Last')) {
                    let index = existPhones.indexOf(checkPhone);
                    let phone = existPhones.splice(index, 1);
                    existPhones.push(phone[0]);
            }
        }
    }
    console.log(existPhones.join(', '));
}
solve(["SamsungA50, MotorolaG5, IphoneSE", "Last - SamsungA50", "End"]);