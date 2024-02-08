function argumentInfo(...data) {
    let resources = {};

    for (let element of data) {
        let type = typeof(element);
        console.log(`${type}: ${element}`);

        if (!resources.hasOwnProperty(type)) {
            resources[type] = 0
        }
        
        resources[type] += 1
    }

    let sortedResult = Object.entries(resources).sort((a, b) => b[1] - a[1]);

    for (let [key, value] of sortedResult) {
        console.log(`${key} = ${value}`);
    }
}