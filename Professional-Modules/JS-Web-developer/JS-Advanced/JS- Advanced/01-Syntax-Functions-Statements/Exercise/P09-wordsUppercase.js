function extractAndConvertToUpper(text) {
    const words = text.match(/[a-zA-Z0-9]+/g);

    const upperCaseWords = words.map(word => word.toUpperCase());
    const result = upperCaseWords.join(', ');
    console.log(result);  
}
extractAndConvertToUpper('Hi, how are you');