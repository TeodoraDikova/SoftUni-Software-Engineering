function extractText() {
    let itemNodes = document.querySelectorAll("ul#items li");
    let textArea = document.getElementsByName('result'); //Select the element with Id = result

    for (let node of itemNodes) {
        textArea.value += node.textContent + "\n";
    }
}