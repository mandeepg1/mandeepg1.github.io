//Quote Stuff
const quotes = ["q1", "q2", "q3", "q4", "q5"];

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

//Rainbow Stuff
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const rainbowContainer = document.getElementById("rainbow-container");
const potOfGold = document.getElementById("pot-of-gold");

const createRainbow = () => {
    //rainbowContainer.innerHTML = ''; // Clear previous rainbow elements
     // Loop through the colors and add a paragraph for each one with a background color
     for (let i = 0; i < colors.length; i++) {
        const color = colors[i];
        const paragraph = document.createElement("p");
        paragraph.style.backgroundColor = color;
       // rainbowContainer.appendChild(paragraph);

        // Use setTimeout to add a delay between each color stripe
        setTimeout(() => {
            paragraph.style.opacity = 1; // Fade in the stripe
        }, i * 1000); // Adjust the delay (in milliseconds) as needed
    }

    // After the rainbow is complete, show the pot of gold
    setTimeout(() => {
        potOfGold.style.display = "block";
    }, colors.length * 1000); // Wait until all colors are shown
    
}


window.onload = () => {
    startQuoteCycle();
    document.getElementById("show-rainbow").onclick = createRainbow;
}

