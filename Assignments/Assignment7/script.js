const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");

}
const showExercise1 = () => {
    document.getElementById("exercise1").style.display = "block";
    document.getElementById("exercise2").style.display = "none";
}
const showExercise2 = () => {
    document.getElementById("exercise1").style.display = "none";
    document.getElementById("exercise2").style.display = "block";
}

const displayAges = () => {
   const resultDiv = document.getElementById("result");
   const firstName = document.getElementById("txt-name-one").value;
   const secondName = document.getElementById("txt-name-two").value;
   const thirdName = document.getElementById("txt-name-three").value;
   const ageOne = parseInt(document.getElementById("txt-age-one").value);
   const ageTwo = parseInt(document.getElementById("txt-age-two").value);
   const ageThree= parseInt(document.getElementById("txt-age-three").value);
   const error = document.getElementById("error-num");
    error.classList.add("hidden");
    resultDiv.classList.add("hidden");

    if (isNaN(ageOne)) {
        error.classList.remove("hidden");
        error.innerHTML = "* Not a valid number";
    } else if (ageOne < 0) {
        error.classList.remove("hidden");
        error.innerHTML = "* Can't have a negative age";
    } else if (ageOne === 0) {
        error.classList.remove("hidden");
        error.innerHTML = "* Can't be zero age lol";
    }else {
        resultDiv.classList.remove("hidden");
    }

   let oldestPerson, middlePerson, youngestPerson;

    if (ageOne >= ageTwo && ageOne >= ageThree) {
        oldestPerson = firstName;
    } else if (ageTwo >= ageOne && ageTwo >= ageThree) {
        oldestPerson = secondName;
    } else {
        oldestPerson = thirdName;
    }

    if (ageOne <= ageTwo && ageOne <= ageThree) {
        youngestPerson = firstName;
    } else if (ageTwo <= ageOne && ageTwo <= ageThree) {
        youngestPerson = secondName;
    } else {
        youngestPerson = thirdName;
    }

    if (firstName !== oldestPerson && firstName !== youngestPerson) {
        middlePerson = firstName;
    } else if (secondName !== oldestPerson && secondName !== youngestPerson) {
        middlePerson = secondName;
    } else {
        middlePerson = thirdName;
    }
        resultDiv.innerHTML = `Oldest: ${oldestPerson}, Middle: ${middlePerson}, Youngest: ${youngestPerson}`;
 
}

window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;
    document.getElementById("button-show-ages").onclick = displayAges;
    document.querySelector(".exer1").onclick = showExercise1;
    document.querySelector(".exer2").onclick = showExercise2;

}