function wordToCensor (text, word) {
    while (text.includes(word)) {
        text = text.replace(word, '*'.repeat(word.length));
    }
    
    console.log(text);
}
wordToCensor('A small sentence with some words', 'small');