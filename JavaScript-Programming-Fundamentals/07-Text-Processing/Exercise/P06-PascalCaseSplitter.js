function pascalCaseSplitter (str) {
    let separatedWords = [];
    let word = '';

    for (let i = 0; i < str.length; i++) {
        let curChar = str[i];

        if (i == 0) {
            word += curChar;
        } else if (/[A-Z]/.test(curChar)) {
            separatedWords.push(word);
            word = '';
            word += curChar;
        } else {
            word += curChar;
        }

        if (i == str.length - 1) {
            separatedWords.push(word);
        }
    }
    console.log(separatedWords.join(', '));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');