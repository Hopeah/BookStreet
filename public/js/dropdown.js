document.querySelector('button').addEventListener('click', toggleBtn)

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function toggleBtn() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.login-overlay')) {
        var myDropdown = document.getElementById("myDropdown");
          if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
          }
    }
}
