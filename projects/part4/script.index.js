
const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

// Add this script in your JavaScript file
document.querySelector('.dropdown').addEventListener('mouseenter', function () {
    document.querySelector('.submenu').style.display = 'block';
});

document.querySelector('.dropdown').addEventListener('mouseleave', function () {
    document.querySelector('.submenu').style.display = 'none';
});


window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;
    
}