function deleteByEmail() {
    const input = document.querySelector('[name="email"]');
    const text = input.value;

    const table = document.getElementById('customers');
    const rowsArr = Array.from(table.querySelectorAll('tbody tr'));

    let success = false;

    for (let row of rowsArr) {
        if (row.children[1].textContent == text) {
            row.remove();
            success = true;
        }
    }

    const output = document.getElementById('result');

    if (success) {
        output.textContent = 'Deleted.'
    } else {
        output.textContent = 'Not found.'
    }
}