//Column 1 - Show and Hide

const showRocket = () => {
    document.getElementById("rocket").classList.remove("hide");
}

const hideRocket = () => {
    document.getElementById("rocket").classList.add("hide");
}

// animate

const moveCircle = () => {
    document.getElementById("circle").classList.add("move-circle");
}


//input stuff

const addComment = () => {
    const productName = document.getElementById("product-name").value;
    const commentS = document.getElementById("comment-txt").value;
    
    const displayStuff = document.getElementById("comment-container");
    displayStuff.innerHTML = productName + commentS;

}

window.onload = () => {
    document.getElementById("button-show").onclick = showRocket;
    document.getElementById("button-hide").onclick = hideRocket;
    document.getElementById("dance-button").onclick = moveCircle;
    document.getElementById("add-comment").onclick = addComment;
}

