
let isRunning = false;
let animationInterval;

const moveTheMan = () => {
    const walkman = document.getElementById("walkman");
    const runman = document.getElementById("runman");

    isRunning = !isRunning;

    if (isRunning) {
        walkman.classList.add("hide");
        runman.classList.remove("hide");
        walkman.classList.add("move-man");
        
        animationInterval = setInterval(moveTheMan, 1000);
    } else {
        walkman.classList.remove("hide");
        runman.classList.add("hide");
        walkman.classList.remove("move-man");
    }
}

const updateThermometer = () => {
    const amount = parseFloat(document.getElementById('total-funds').value);
    const fill = document.querySelector('.fill');

    const percentage = Math.min((amount / 10000) * 100, 100);
    
    fill.style.height = percentage + '%';
};

window.onload = () => {
    document.getElementById("display-funds").onclick = updateThermometer;
    document.getElementById("walkman").onclick = moveTheMan;
};

