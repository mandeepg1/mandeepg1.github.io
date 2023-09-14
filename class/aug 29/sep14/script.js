//const add = (a,b) =>  a+b;

//const add = (a,b) => {return a+b;}
//console.log(add(5,6));

//const square = a => a * a;
//const square = (a) => a * a;

//console.log(square(5));

//const hello = () => console.log("Hello me!");

//hello();

//const helloSpecfic = userName => console.log("Hello "+ userName + "!");

//helloSpecfic("Portia");

//const helloFullName = (firstName, lastName) => {
  //  console.log("Hello "+ userName + "!");
    //console.log("You are awesome");
//}

//helloFullName("portia, plante");

/*Not ok to change a constant
const myName = "Portia";
myName = "sally"; */

//const myFunct = () => console.log("Hey you!")

const moveSquare = () => {
    document.getElementById("square").classList.add("move-square");
}
const removeSquare = () => {
    document.getElementById("square").classList.remove("move-square");
}

const displayName = () => {
    const firstName = document.getElementById("txt-first-name").value;
    console.log("Hello "+ firstName + "!");
}

window.onload = () => {
    document.getElementById("button-click").onclick = moveSquare;
    document.getElementById("button-stop").onclick = removeSquare;
    document.getElementById("button-show-name").onclick = displayName;
}