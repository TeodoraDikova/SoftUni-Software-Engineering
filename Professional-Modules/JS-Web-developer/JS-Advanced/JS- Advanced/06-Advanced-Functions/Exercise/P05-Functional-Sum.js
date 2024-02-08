function add(initialValue) {
    let sum = initialValue;

    function addInternal(value) {
        sum += value;
        
        return addInternal;
    }

    addInternal.toString = function () {
        return sum;
    };

    return addInternal;
}
