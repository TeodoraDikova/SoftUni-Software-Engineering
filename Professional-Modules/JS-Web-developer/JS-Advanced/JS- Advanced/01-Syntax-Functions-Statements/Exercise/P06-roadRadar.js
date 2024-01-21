function determinesSpeed (vehicleSpeed, area) {
    let speedLimit = 0;
    let diff = 0;
    let status = '';

    switch (area) {
        case 'motorway': speedLimit = 130; break;
        case 'interstate': speedLimit = 90; break;
        case 'city': speedLimit = 50; break;
        case 'residential': speedLimit = 20; break;
    }

    if (vehicleSpeed > speedLimit) {
        diff = vehicleSpeed - speedLimit;

         if (diff <= 20) {
            status = 'speeding';
         } else if (diff <= 40) {
            status = 'excessive speeding';
         } else {
            status = 'reckless driving'
         }

         console.log (`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    } else {
        console.log (`Driving ${vehicleSpeed} km/h in a ${speedLimit} zone`);
    }
}

determinesSpeed(21, 'residential');