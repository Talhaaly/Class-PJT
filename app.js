const UserName = document.getElementById('UserName')
const Email = document.getElementById('Email')
const Password = document.getElementById('Password')
const CPassword= document.getElementById('CPassword')








const signUpHandler = () => {
    const users = localStorage.getItem('users') || []
    if(!UserName || !Email || !Password || !CPassword ) return alert ('Sari field likh bhai')
    if(Password.ariaValueMax.length >=8) return alert ('pory length ka password likh bhai')
    if(Password.value != CPassword.value) return alert('Same password  likh  bhai')
    const user = {
UserName = UserName.value,
Email = Email.value,
Password = Password.value,
Password = CPassword.value
}
alert("signUp SuccessFully, now you can login")
setTimeout(()=>{
    window.location.href = '../login.login.html'
}, 2000)

}