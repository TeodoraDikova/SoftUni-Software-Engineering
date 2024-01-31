function addItem() {
    const input = document.getElementById("newItemText");
    const text = input.value;

    if (input.value.length == 0) {
        return
    };

    const liElement = document.createElement('li');
    liElement.textContent = text;

    // Begin 03.Add-Delete

    const deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    deleteBtn.addEventListener('click', onDelete)
    liElement.appendChild(deleteBtn);

    // End 03.Add-Delete

    let listOfItems = document.getElementById("items");
    listOfItems.appendChild(liElement);

    input.value = '';

    function onDelete(event) {
        const deleteBtn = event.target;
        const liElement = deleteBtn.parentElement;
        liElement.remove();
    }
}