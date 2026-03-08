const LoginForm = document.getElementById('loginForm');
const Username = document.getElementById('username');
const Password = document.getElementById('password');
const SignIn = document.getElementById('signIn');


SignIn.addEventListener('click', (event) =>{
    event.preventDefault();
    const username = Username.value;
    const password = Password.value;
    if(username !== "admin" || password !== "admin123"){
        alert("Invalid Username");
        return;
    }
    else{
        alert("Login SuccessFull!")
        return window.location.href = 'index.html';
    } 
    
});