document.getElementById('login-button').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if(userEmail == 'sontan@bap.com' && userPassword == 'nice'){
        window.location.href = 'banking.html'
    }
    else{
        document.getElementById('varification-failed').style.display = "block";
    }
})