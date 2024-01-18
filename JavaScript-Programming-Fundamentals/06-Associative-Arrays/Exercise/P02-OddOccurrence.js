function oddOccurrence (inputStr) {
    let wordsArr = inputStr.toLowerCase().split(' ');
    let wordOccurs = new Map();

    for (let word of wordsArr) {
        if (wordOccurs.has(word)) {
            wordOccurs.set(word, wordOccurs.get(word) + 1);
        } else {
            wordOccurs.set(word, 1);
        }
    }
    
    let resultToPrint = [];

    for (let [word, count] of wordOccurs) {
        if (count % 2 != 0) {
            resultToPrint.push(word)
        }
    }

    console.log(resultToPrint.join(' '));
}
oddOccurrence('Cake IS SWEET is Soft CAKE sweet Food');