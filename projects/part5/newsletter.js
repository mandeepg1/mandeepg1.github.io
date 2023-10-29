const submitNewsletter = (e) => {
    e.preventDefault();

    const isSuccessful = true;
    if (isSuccessful) {
        document.getElementById("newsletter-results").classList.remove("hidden");
    }

    const form = document.getElementById("newsletter");
    const firstName = form.elements["first_name"].value;
    const email = form.elements["email"].value;
    const newsUpdates = form.elements["updates"].value;
    const favoriteTeam = form.elements["favorite_team"].value;
    const termsChecked = form.elements["terms"].checked;

    document.getElementById("result-first-name").textContent = firstName;
    document.getElementById("result-email").textContent = email;
    document.getElementById("result-news-updates").textContent = newsUpdates;
    document.getElementById("result-favorite-team").textContent = favoriteTeam;
    document.getElementById("result-terms").textContent = termsChecked ? "Yes" : "No";
};

document.getElementById("newsletter").onsubmit = submitNewsletter;

