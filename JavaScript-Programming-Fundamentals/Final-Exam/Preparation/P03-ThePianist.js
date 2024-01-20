function thePianist(arr) {
    let numPieces = Number(arr.shift());
    let result = {};

    for (let i = 0; i < numPieces; i++) {
        let [piece, composer, key] = arr.shift().split('|');

        result[piece] = { composer, key };
    }

    let command = arr.shift();

    while (command !== 'Stop') {
        let [action, token1, token2, token3] = command.split('|');

        switch (action) {
            case 'Add':
                let newPiece = token1;
                let composer = token2;
                let key = token3;

                if (result[newPiece]) {
                    console.log(`${newPiece} is already in the collection!`);
                } else {
                    result[newPiece] = { composer, key };
                    console.log(`${newPiece} by ${composer} in ${key} added to the collection!`);
                }
                break;

            case 'Remove':
                let pieceToRemove = token1;

                if (result[pieceToRemove]) {
                    delete result[pieceToRemove];
                    console.log(`Successfully removed ${pieceToRemove}!`);
                } else {
                    console.log(`Invalid operation! ${pieceToRemove} does not exist in the collection.`);
                }
                break;

            case 'ChangeKey':
                let pieceToChange = token1;
                let newKey = token2;

                if (result[pieceToChange]) {
                    result[pieceToChange].key = newKey;
                    console.log(`Changed the key of ${pieceToChange} to ${newKey}!`);
                } else {
                    console.log(`Invalid operation! ${pieceToChange} does not exist in the collection.`);
                }
                break;
        }

        command = arr.shift();
    }

    Object.entries(result).forEach(piece => {
        console.log(`${piece[0]} -> Composer: ${piece[1].composer}, Key: ${piece[1].key}`);
    });
}

thePianist(['4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop']);