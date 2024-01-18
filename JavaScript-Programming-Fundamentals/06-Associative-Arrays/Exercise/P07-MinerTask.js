function minerTask (arr) {
    let resourceQntys = {};

    for (let i = 0; i < arr.length; i += 2) {
        let resource = arr[i];
        let qnty = Number(arr[i + 1]);

        if (resource in resourceQntys) {
            resourceQntys[resource] += qnty;
        } else {
            resourceQntys[resource] = qnty;
        }
    }
    let entries = Object.entries(resourceQntys);
    
    for (let [resource, qnty] of entries) {
        console.log(resource, '->', qnty);
    }
    
}

minerTask(['Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17']);