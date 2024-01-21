function coockingByNums (num, ...op) {
    num = Number(num);
    let action = op.shift();

    for (let i = 0; i <= 4; i ++){
        switch (action) {
            case 'chop': num = num / 2; break;
            case 'dice': num = Math.sqrt(num); break;
            case 'spice': num = num + 1; break;
            case 'bake': num = num * 3; break;
            case 'fillet': num = num* 0.8; break;
        }

        console.log(num);

        action = op.shift();
    }
}

coockingByNums('32', 'chop', 'chop', 'chop', 'chop', 'chop');