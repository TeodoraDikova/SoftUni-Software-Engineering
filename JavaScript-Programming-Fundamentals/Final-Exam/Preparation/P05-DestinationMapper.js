function destinationMapper(str) {
    let result = [];
    let sumLength = 0;

    let pattern = /([=\/])(?<place>[A-Z][A-za-z]{2,})\1/g;

    let match;
    while ((match = pattern.exec(str)) != null) {
        let place = match.groups.place;
        sumLength += place.length;
        result.push(place);
    }

    console.log(`Destinations: ${result.join(', ')}`);
    console.log(`Travel Points: ${sumLength}`);
}


destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");           