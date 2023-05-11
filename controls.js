let isRunning = true;

document.getElementById("pause").addEventListener("click", () => {
    isRunning = false;
})

document.getElementById("start").addEventListener("click", () => {
    isRunning = true;
})