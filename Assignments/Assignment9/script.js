//Quote Stuff
const quotes = ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein", 
"Even if you are on the right track, you’ll get run over if you just sit there.” —Will Rogers", 
"Aerodynamics are for people who can't build engines. - Enzo Ferrari", 
"Death can have me, when it earns me - Kratos", 
"If you no longer go for a gap that exists, you’re no longer a racing driver. - Ayrton Senna"];

const showQuotes = () => {
    const result = document.getElementById("result");
    result.innerHTML = quotes[m];
    m = (m + 1) % quotes.length;
}

let m = 0; 

const startQuoteCycle = () => {
    showQuotes(); 
    setInterval(showQuotes, 2000);
}


// Rainbow Stuff
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

let currentRB_Color = 0;
let rainbowContainer;
let imageContainer;

function createRainbow() {
    if (!rainbowContainer) {
        rainbowContainer = document.getElementById("rainbow-container");
    }
    
    if (!imageContainer) {
        imageContainer = document.getElementById("image-container");
    }
    
    if (rainbowContainer && currentRB_Color < colors.length) {
        const RB_Strip = document.createElement("div");
        RB_Strip.classList.add("rainbow-strip");
        RB_Strip.classList.add(colors[currentRB_Color]);
        rainbowContainer.appendChild(RB_Strip);
        currentRB_Color++;
        setTimeout(createRainbow, 500);
    } else if (imageContainer) {
        console.log("Showing image container");
        setTimeout(() => {
            imageContainer.classList.remove("hidden");
        }, 100);
    }
}

window.onload = () => {
    startQuoteCycle();
    document.getElementById("show-rainbow").onclick = createRainbow;
}