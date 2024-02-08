function calculator() {
    let selectors = {
        selector1: '',
        selector2: '',
        resultSelector: ''
    };

    return {
        init(selector1, selector2, resultSelector) {
            selectors.selector1 = selector1;
            selectors.selector2 = selector2;
            selectors.resultSelector = resultSelector;
        },
        add() {
            const operand1 = parseFloat(document.querySelector(selectors.selector1).value) || 0;
            const operand2 = parseFloat(document.querySelector(selectors.selector2).value) || 0;
            const resultElement = document.querySelector(selectors.resultSelector);

            let result = operand1 + operand2;
            resultElement.value = result;
        },
        subtract() {
            const operand1 = parseFloat(document.querySelector(selectors.selector1).value) || 0;
            const operand2 = parseFloat(document.querySelector(selectors.selector2).value) || 0;
            const resultElement = document.querySelector(selectors.resultSelector);

            let result = operand1 - operand2;
            resultElement.value = result;
        }
    };
}


