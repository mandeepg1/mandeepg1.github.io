/* make this var equal to the arrow function, different syntax and also growing standard*/
/*const loadFunction = () => {
    const helloP = document.getElementById("date");
    helloP.innerHTML = "hi"
}
*/

/*window.onload = loadFunction;*/

const changeText = () => {
    const helloP = document.getElementById("date");
    helloP.innerHTML = "hi, to you, portia";
    helloP.classList.add("special");
}

const showJasper = () => {
    document.getElementById("jasper").classList.remove("hide");
}

const hideJasper = () => {
    document.getElementById("jasper").classList.add("hide");
}

window.onload = () => {
    //const clickButton = document.getElementById("button-click");
    //clickButton.onclick = changeText;

    document.getElementById("button-click").onclick = changeText;
    //on above line of code...onclick = () => {const and clickbutton inside rather then the name of the function change text}
    //const helloP = document.getElementById("date");
    //helloP.innerHTML = "hi"
    document.getElementById("button-show").onclick = showJasper;
    document.getElementById("button-show").onclick = hideJasper;

}

