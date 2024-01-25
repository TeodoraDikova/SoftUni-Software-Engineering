function carFactory(inputObj) {
    let { model, power, color, carriage, wheelsize } = inputObj;

    const components = {
        model,
        engine: function (power) {
            let engine = {};

            if (power <= 90) {
                engine = { power: 90, volume: 1800 };
            } else if (power <= 120) {
                engine = { power: 120, volume: 2400 };
            } else {
                engine = { power: 200, volume: 3500 };
            }

            return engine;
        },
        carriage: function (type, color) {
            return { type, color };
        },
        wheelsize: function (size) {
            const roundedSize = Math.floor(size) % 2 === 0 ? Math.floor(size) - 1 : Math.floor(size);
            return [roundedSize, roundedSize, roundedSize, roundedSize];
        },
    };

    const car = {
        model,
        engine: components.engine(power),
        carriage: components.carriage(carriage, color),
        wheels: components.wheelsize(wheelsize),
    };

    return car;
}

carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 });