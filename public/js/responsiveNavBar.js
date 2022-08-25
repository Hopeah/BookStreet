document.querySelector('.icon').addEventListener('click', toggleMenu)

/* When the user clicks on the icon, 
toggle between hiding and showing the navbar content */
function toggleMenu() {
    const nav = document.getElementById("topnav");
    console.log(nav)
    if (nav.className === "topnav") {
        nav.className += " responsive";
    } else {
        nav.className = "topnav";
    }
}