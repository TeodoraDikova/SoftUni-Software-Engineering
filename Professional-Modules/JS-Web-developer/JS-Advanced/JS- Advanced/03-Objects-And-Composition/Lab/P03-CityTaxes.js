function cityTaxes(name, population, treasury) {
    return {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes: function () {
            this.treasury += Math.floor(this.population * (this.taxRate / 100));
        },
        applyGrowth: function (percentage) {
            this.population = Math.floor(this.population * (1 + percentage / 100));
        },
        applyRecession: function (percentage) {
            this.treasury = Math.floor(this.treasury * (1 - percentage / 100));
        }
    };
}

// Example usage:
const city = cityTaxes('Tortuga', 7000, 15000);
console.log(city);

city.collectTaxes();
console.log(city.treasury);

city.applyGrowth(5);
console.log(city.population);
