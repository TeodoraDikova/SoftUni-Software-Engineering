function breakfastRobot() {
    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let recipes = { 
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };

    return function (input) {
        let [action, product, qty] = input.split(' ');

        switch (action) {
            case 'restock':
                return restock(product, qty);
            case 'prepare':
                return prepare(product, qty);
            case 'report':
                return report();
        }
    };

    function restock(product, qty) {
        ingredients[product] += Number(qty);
        return 'Success';
    }

    function prepare(product, qty) {
        let recipeToCook = recipes[product];

        for (let [ingredient, value] of Object.entries(recipeToCook)) {
            let neededQty = value * Number(qty);

            if (ingredients[ingredient] < neededQty) {
                return `Error: not enough ${ingredient} in stock`;
            }

            ingredients[ingredient] -= neededQty;
        }

        return 'Success';
    }

    function report() {
        return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
    }
}

breakfastRobot(['restock flavour 50', 'Success'],);
breakfastRobot(['prepare lemonade 4', 'Error: not enough carbohydrate in stock']);
  
