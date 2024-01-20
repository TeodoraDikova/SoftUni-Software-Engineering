function worldTour(arr) {
    let stops = arr.shift();
    let command = arr.shift();


    while(command != 'Travel') {
        let [action, token1, token2] = command.split(':');

        switch (action){
            case 'Add Stop':
                let indx = Number(token1);
                let string = token2;

                if (indx >= 0 && indx <= stops.length) {
                    stops = stops.substring(0, indx) + string + stops.substring(indx);
                }
                console.log(stops);
                break;

            case 'Remove Stop':
                let startIndx = Number(token1);
                let endIndx = Number(token2);

                if (startIndx >= 0 && endIndx < stops.length) {
                    stops = stops.substring(0, startIndx) + stops.substring(endIndx + 1);
                }
                console.log(stops);
                 break;

            case 'Switch':
                let oldString = token1;
                let newString = token2;

                if (stops.includes(oldString)){
                    stops = stops.replace(oldString, newString);
                }
                console.log(stops);
                break;
        }

        command = arr.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`)
}
worldTour(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"]);