function wordOccurs (input) {
    let wordOccurs = new Map();

    for (let word of input) {
        
        if (wordOccurs.has(word)) {
            wordOccurs.set(word, wordOccurs.get(word) + 1);
        } else {
            wordOccurs.set(word, 1);
        }
    } 

    let sorted = Array.from(wordOccurs).sort((a, b) => b[1] - a[1]);

    for (let kvp of sorted) {
        console.log(kvp[0], '->', kvp[1], 'times');
    }
}
wordOccurs(["Here", "is", "the", "first", "sentence",
"Here", "is", "another", "sentence", "And",
"finally", "the", "third", "sentence"])