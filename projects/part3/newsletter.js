const submitNewsletter = (e) => {
    e.preventDefault();
    document.getElementById("results").classList.remove("hidden");
  
    const form = document.getElementById("newsletter");
    const firstName = form.elements["first_name"].value;
    const email = form.elements["email"].value;
    const newsUpdates = form.elements["updates"].value;
    const favoriteTeam = form.elements["favorite_team"].value;
    const termsChecked = form.elements["terms"].checked;
  
    console.log(firstName);
    console.log(email);
    console.log(newsUpdates);
    console.log(favoriteTeam);
    console.log(termsChecked);
};

document.getElementById("newsletter").onsubmit = submitNewsletter;
