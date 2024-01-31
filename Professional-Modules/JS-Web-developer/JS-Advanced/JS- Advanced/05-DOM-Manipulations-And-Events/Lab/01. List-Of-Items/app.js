function addItem() {
    const input = document.getElementById("newItemText");
    const text = input.value;

    if (input.value.length == 0) {
        return
    };

    const liElement = document.createElement('li');
    liElement.textContent = text;

    let listOfItems = document.getElementById("items");
    listOfItems.appendChild(liElement);

    input.value = '';
}