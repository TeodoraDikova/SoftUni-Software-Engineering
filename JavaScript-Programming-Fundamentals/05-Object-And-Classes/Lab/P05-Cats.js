function cats(arr) {

    class Cat {
        constructor(catName, catAge) {
            this.catName = catName;
            this.catAge = catAge;
        }

        meow() {
            console.log(`${this.catName}, age ${this.catAge} says Meow`);
        }
    }

    for (let catInfo of arr) {
        let [catName, catAge] = catInfo.split(' ');
        let cat = new Cat(catName, Number(catAge));
        cat.meow();
    }
}

cats(['Mellow 2','Tom 5']);