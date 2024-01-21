function calculateTime(steps, footprintLengthM, speedKmPerH) {
    const distanceMeters = steps * footprintLengthM;
    const breaks = Math.floor(distanceMeters / 500);
    const totalTimeHours = distanceMeters / (speedKmPerH * 1000) + breaks / 60;

    const hours = Math.floor(totalTimeHours);
    const minutes = Math.floor((totalTimeHours * 60) % 60);
    const seconds = Math.round((totalTimeHours * 3600) % 60);

    console.log(`${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
}

calculateTime(4000, 0.60, 5);