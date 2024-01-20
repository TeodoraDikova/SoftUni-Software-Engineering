function mirrorwords(input) {
    let result = [];
    let pattern = /(@|#)(?<wordone>[A-Za-z]{3,})\1\1(?<wordtwo>[A-Za-z]{3,})\1/g;
    
    let matches = input[0].matchAll(pattern);

    let count = 0;

    if (matches) {
        
        for (let match of matches) {
            let reversedWordOne = match.groups.wordone.split('').reverse().join('');

            if (reversedWordOne == match.groups.wordtwo) {
                result.push(`${match.groups.wordone} <=> ${match.groups.wordtwo}`);
            } 
            
            count ++;
        }
    }

    if (count > 0 && result.length > 0) {
        console.log(`${count} word pairs found!`);
        console.log('The mirror words are:');
        console.log(result.join(', '));
    } else if (count > 0){
        console.log(`${count} word pairs found!`);
        console.log('No mirror words!');
    } else {
        console.log('No word pairs found!');
        console.log('No mirror words!');
    }
}

mirrorwords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);