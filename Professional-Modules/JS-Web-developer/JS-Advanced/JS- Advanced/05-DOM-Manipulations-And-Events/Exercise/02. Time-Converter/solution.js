function attachEventsListeners() {
    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    const btnArr = Array.from(document.querySelectorAll('input[type="button"]'));

    btnArr.forEach(btn => btn.addEventListener('click', convert));

    function convert(event) {
        const clickedButton = event.target.id;

        switch (clickedButton) {
            case 'daysBtn':
                hoursInput.value = daysInput.value * 24;
                minutesInput.value = daysInput.value * 24 * 60;
                secondsInput.value = daysInput.value * 24 * 60 * 60;
                break;
            case 'hoursBtn':
                daysInput.value = hoursInput.value / 24;
                minutesInput.value = hoursInput.value * 60;
                secondsInput.value = hoursInput.value * 60 * 60;
                break;
            case 'minutesBtn':
                daysInput.value = minutesInput.value / (24 * 60);
                hoursInput.value = minutesInput.value / 60;
                secondsInput.value = minutesInput.value * 60;
                break;
            case 'secondsBtn':
                daysInput.value = secondsInput.value / (24 * 60 * 60);
                hoursInput.value = secondsInput.value / (60 * 60);
                minutesInput.value = secondsInput.value / 60;
                break;
            default:
                break;
        }
    }
}