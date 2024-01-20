function matchFullNames(names) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let result = names.match(pattern);

    console.log(result.join(' '));
}
matchFullNames("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan   Ivanov");