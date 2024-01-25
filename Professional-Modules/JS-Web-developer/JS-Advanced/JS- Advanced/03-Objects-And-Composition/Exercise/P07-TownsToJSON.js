function townsToJSON(input) {
    let result = [];

    for (let i = 1; i < input.length; i++) {

        let [Town, Latitude, Longitude] = input[i]
        .split('|')
        .filter(item => item.trim() !== '')
        .map(item => item.trim());

        Latitude = Number(Latitude).toFixed(2);
        Longitude = Number(Longitude).toFixed(2);

        result.push({Town, Latitude: parseFloat(Latitude), Longitude: parseFloat(Longitude)})
    }

    console.log(JSON.stringify(result));
}
townsToJSON(
['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);