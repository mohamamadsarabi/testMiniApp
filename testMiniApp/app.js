window.Telegram.WebApp.ready();

document.getElementById('startButton').addEventListener('click', () => {
    Telegram.WebApp.sendData("Hello from the Mini App!");
    alert("Data sent to Telegram bot!");
});
