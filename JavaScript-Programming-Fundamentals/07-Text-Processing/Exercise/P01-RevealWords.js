function revealWords (wordsStr, text) {
    let words = wordsStr.split(', ');

    for (let word of words) {
        let repeatCount = word.length;

        let startTemplate = '*'.repeat(repeatCount);
        text = text.replace(startTemplate, word);
    }

    console.log(text);
}
revealWords('great', 'softuni is ***** place for learning new programming languages');