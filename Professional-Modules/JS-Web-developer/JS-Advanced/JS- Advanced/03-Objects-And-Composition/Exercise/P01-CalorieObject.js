function calorieObject (arr) {
    let foodCaloriesObj = {};

    for (i = 0; i < arr.length; i += 2) {
        let foodName = arr[i];
        let foodCalories = Number(arr[i + 1]);

        foodCaloriesObj[foodName] = foodCalories;
    }

    console.log(foodCaloriesObj);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);