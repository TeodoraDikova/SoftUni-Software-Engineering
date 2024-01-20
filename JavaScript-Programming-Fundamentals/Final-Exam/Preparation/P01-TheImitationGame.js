function imitationGame (arr) {
    let msg = arr.shift();
    let command = arr.shift();
    

    while (command != 'Decode') {
        let [action, token1, token2] = command.split('|');

        switch(action){
            case 'Move':
                let numLetters = Number(token1);

                let letters = msg.substring(0, numLetters);
                msg = msg.substring(numLetters) + letters;

                break;
            case 'Insert':
                let idx = Number(token1);
                let value = token2;

                let leftHalf = msg.slice(0, idx);
                let rigthHalf = msg.slice(idx);
                
                msg = leftHalf + value + rigthHalf;

                break;
            case 'ChangeAll':
                let substr = token1;
                let replacement = token2;

                while (msg.includes(substr)) {
                    msg = msg.replace(substr, replacement);
                }
                
            break;
        }

        command = arr.shift();
    }

    console.log(`The decrypted message is: ${msg}`);
}
// imitationGame(['zzHe',
//     'ChangeAll|z|l',
//     'Insert|2|o',
//     'Move|3',
//     'Decode']);

imitationGame(['owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode']);