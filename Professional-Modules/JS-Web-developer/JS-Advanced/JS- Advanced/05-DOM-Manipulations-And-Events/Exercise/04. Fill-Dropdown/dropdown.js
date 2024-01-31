function addItem() {
    const newItemTextInput = document.getElementById('newItemText');
    const newItemValueInput = document.getElementById('newItemValue');

    const menu = document.getElementById('menu');
    const optionElement = document.createElement('option');

    optionElement.textContent = newItemTextInput.value;
    optionElement.value = newItemValueInput.value;
    
    menu.appendChild(optionElement);

    newItemTextInput.value = '';
    newItemValueInput.value = '';
}