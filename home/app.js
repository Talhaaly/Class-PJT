

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}




// --------------------------------------------------------------------
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

if(!loggedInUser) window.location.href = '../login/index.html'

const userName = document.getElementById('userName')

userName.innerHTML = JSON.parse(localStorage.getItem('loggedInUser')).userName



const logoutHandler = () => {
    localStorage.removeItem('loggedInUser')

    window.location.href = '../login/index.html'
}