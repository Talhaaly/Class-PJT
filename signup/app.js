
// navBar 

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}



const UserName = document.getElementById('UserName')
const Email = document.getElementById('Email')
const Password = document.getElementById('Password')
const CPassword= document.getElementById('CPassword')








const signUpHandler = () => {
    const users = localStorage.getItem('users') || []
    if(!UserName || !Email || !Password || !CPassword ) return alert ('Sari field likh bhai')
    if(Password.ariaValueMax.length >=8) return alert ('pory length ka password likh bhai')
    if(Password.value != CPassword.value) return alert('Same password  likh  bhai')

alert("signUp SuccessFully, now you can login")
setTimeout(()=>{
    window.location.href = '../login.login.html'
}, 2000)

}