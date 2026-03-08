const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const signInBtn = document.getElementById('signIn');


signInBtn.addEventListener('click', (event) =>{
    event.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;
    if(username !== "admin" ){
        alert("Invalid Username!");
        return;
    }
    else if(password !== "admin123"){
        alert("Invalid Password!");
        return;
    }
    else{
        // alert("Login SuccessFull!")
        return window.location.href = 'dashboard.html';
    } 
    
});