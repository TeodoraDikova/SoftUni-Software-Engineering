function encodeAndDecodeMessages() {
    let textareElements = Array.from(document.querySelectorAll('textarea'));
    let encodedMsg = textareElements[0];
    let decodedMsg = textareElements[1];

    const btns = Array.from(document.querySelectorAll('button'));

    btns.forEach(btn => btn.addEventListener('click', buttons));

    function buttons(event) {
        if (event.target.textContent === 'Encode and send it') {
            let encoded = [...encodedMsg.value].map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');

            decodedMsg.value = encoded;
            encodedMsg.value = '';
        } else if (event.target.textContent === 'Decode and read it') {
            let decoded = [...decodedMsg.value].map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join('');
            
            decodedMsg.value = decoded;
            encodedMsg.value = '';
        }
    }
}