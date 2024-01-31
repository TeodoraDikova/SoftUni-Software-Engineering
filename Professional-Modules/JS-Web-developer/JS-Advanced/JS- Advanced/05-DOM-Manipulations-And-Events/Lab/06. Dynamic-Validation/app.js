function validate() {
    const inputElement = document.querySelector('[type="text"]');
    const text = inputElement.value;

    const pattern =  /^[a-z]+@[a-z]+\.[a-z]+$/;

    inputElement.addEventListener('change', checkEmail);

    function checkEmail(event) {
        if (pattern.test(event.target.value)) {
            event.target.removeAttribute('class');
            return;
        } 
        event.target.className = 'error'
    }
}