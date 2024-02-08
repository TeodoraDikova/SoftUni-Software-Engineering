class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set diameter(diameter) {
        this._radius = diameter / 2;
    }

    get diameter() {
        return this._radius * 2;
    }

    get area() {
        return Math.PI * this._radius ** 2;
    }
}