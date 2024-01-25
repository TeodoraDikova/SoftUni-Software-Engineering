function editElement(ref, match, replacer) {
    const content = ref.textContent; //If element has children, returns all text concatenated
    const matcher = new RegExp(match, 'g');
    const edited = content.replace(matcher, replacer); //Replace all occurences of match inside the text contentof the given element with  replacer
    ref.textContent = edited;
}