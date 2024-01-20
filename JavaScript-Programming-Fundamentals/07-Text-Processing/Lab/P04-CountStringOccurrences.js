function countStringOccurrences (text, wordToCount) {
     let words = text.split(' ');
     let count = 0;

     for (let word of words) {

        if(word == wordToCount) {
            count ++
        }
     }
     
     console.log(count);
}
countStringOccurrences ('This is a word and it also is a sentence', 'is');