function formatTime(number) {
    return number < 10 ? `0${number}` : number;
}
function UC() {
    const targetDate = new Date('2024-10-30T11:00:00-03:00');
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
        document.getElementById('Contador').innerHTML = 'Es Mi Cumpleaños';
    } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        const FHours = formatTime(hours);
        const FMinutes = formatTime(minutes);
        const FSeconds = formatTime(seconds);
        if (days > 0) {
            document.getElementById('Contador').innerHTML = `${days} Días - ${FHours}:${FMinutes}:${FSeconds}`;
        } else {
            document.getElementById('Contador').innerHTML = `${FHours}:${FMinutes}:${FSeconds}`;
        }
    }
}
setInterval(UC, 1000);
UC();