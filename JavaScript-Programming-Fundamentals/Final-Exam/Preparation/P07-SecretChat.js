function secretChat(arr) {
    let msg = arr.shift();

    let command = arr.shift();

    while (command != 'Reveal') {
        let [action, token1, token2] = command.split(':|:');

        switch (action) {
            case 'InsertSpace':
                msg = msg.substring(0, Number(token1)) + ' ' + msg.substring(Number(token1));

                console.log(msg);
                break;

            case 'Reverse':
                if (msg.includes(token1)) {
                    let indxSubstr = msg.indexOf(token1);

                    if (indxSubstr != -1) {
                        let reversedSubst = token1.split('').reverse().join('');
                        msg = msg.slice(0, indxSubstr) + reversedSubst + msg.slice(indxSubstr + token1.length);
                    }

                    console.log(msg);
                } else {
                    console.log('error');
                }
                break;

            case 'ChangeAll':
                while (msg.includes(token1)) {
                    msg = msg.replace(token1, token2);
                }

                console.log(msg);
                break;
        }

        command = arr.shift();
    }

    console.log(`You have a new text message: ${msg}`);
}

secretChat ([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ]);