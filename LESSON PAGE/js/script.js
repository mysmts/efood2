document.addEventListener('DOMContentLoaded', function() {
    // Obtenha o ano atual
    const currentYear = new Date().getFullYear();

    // Defina a data do aniversário para o próximo ano
    const birthdayDate = new Date(currentYear + 1, 1, 28, 0, 0, 0);

    // Atualize a contagem regressiva a cada segundo
    setInterval(updateCountdown, 1000);

    function updateCountdown() {
        const currentDate = new Date();
        const difference = birthdayDate - currentDate;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }
});
