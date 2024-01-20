function adAstra(str) {
    let items = [];
    let totalKcal = 0;

    let pattern = /([#|])([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d+)\1/g;

    let matches = pattern.exec(str);

    while (matches) {
        let name = matches[2];
        let expdate = matches[3];
        let kcal = matches[4];

        items.push(`Item: ${name}, Best before: ${expdate}, Nutrition: ${kcal}`);

        totalKcal += Number(kcal);

        matches = pattern.exec(str);
    }

    let days = Math.floor(totalKcal / 2000);

    console.log(`You have food to last you for: ${days} days!`);

    if (days > 0) {
        items.forEach(item => console.log(item));
    }
}
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);