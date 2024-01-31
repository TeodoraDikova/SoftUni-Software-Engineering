function lockedProfile() {
    const btns = Array.from(document.getElementsByTagName('button'));

    btns.forEach(btn => btn.addEventListener('click', showMore));

    function showMore(event) {
        const button = event.target;
        const profile = button.parentNode;
        const moreInf = profile.querySelector('div');
        const lockStatus = profile.querySelector('input[type="radio"]:checked').value;

        if (lockStatus === 'unlock') {
            if (button.textContent === 'Show more') {
                moreInf.style.display = 'inline-block';
                button.textContent = 'Hide it';
            } else if (button.textContent === 'Hide it') {
                moreInf.style.display = 'none';
                button.textContent = 'Show more';
            }
        }
    }
}