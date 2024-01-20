function hogwarts(arr) {
    let str = arr.shift();

    let command = arr.shift();
    while (command != 'Abracadabra') {
        let [action, token1, token2] = command.split(' ');

        switch(action) {
            case 'Abjuration':
                str = str.toUpperCase();
                
                console.log(str);
                break;

            case 'Necromancy':
                str = str.toLowerCase();

                console.log(str);
                break;

                case 'Illusion':
                    let indx = Number(token1);
                    let letter = token2;
                
                    if (indx < str.length && indx >= 0) {
                        str = str.substring(0, indx) + letter + str.substring(indx + 1);
                        console.log('Done!');
                    } else {
                        console.log('The spell was too weak.');
                    }
                    break;
                
                case 'Divination':
                    let fistSubstr = token1;
                    let secondSubst = token2;

                    if(str.includes(fistSubstr)) {
                        while(str.includes(fistSubstr)) {
                            str = str.replace(fistSubstr, secondSubst);
                        }

                        console.log(str);
                    } else {
                        continue;
                    }
                    break;

                case 'Alteration':
                    let substr = token1;

                    if (str.includes(substr)) {
                        str = str.replace(substr, '');

                        console.log(str);
                    } else {
                        continue;
                    }
                    break;

                    default: console.log('The spell did not work!')
        }

        command = arr.shift();
    }
}

hogwarts(['SwordMaster', 'Target Target Target', 'Abjuration', 'Necromancy', 'Alteration master', 'Abracadabra'])