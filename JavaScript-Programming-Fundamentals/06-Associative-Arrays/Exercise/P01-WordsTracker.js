function wordsTracker(input) {
    let wordsToCount = input[0].split(' ');
    let words = input.slice(1);
    let wordCounts = {};

    for (let word of wordsToCount) {
        wordCounts[word] = 0;
    }

    for (let word of words) {
        if (wordsToCount.includes(word.toLowerCase())) {
            wordCounts[word.toLowerCase()]++;
        }
    }

    let sortedWords = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sortedWords) {
        console.log(`${word} - ${count}`);
    }
}
wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence']
    );