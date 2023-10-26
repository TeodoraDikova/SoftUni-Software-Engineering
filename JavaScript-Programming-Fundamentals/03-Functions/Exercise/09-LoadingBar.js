function loadingBar(percentagesNum) {
    let percentagesStr = "";

    for (let i = 1; i <= 10; i++) {
        if (100 - (10 * i) >= 100 - percentagesNum){
            percentagesStr += "%";
        } else {
            percentagesStr += ".";
        }
    }

    if (percentagesNum < 100){
        console.log(`${percentagesNum}% [${percentagesStr}] \nStill loading...`);
     } else {
        console.log("100% Complete! \n[%%%%%%%%%%]")
    }
}