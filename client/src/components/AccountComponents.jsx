function checkPassword() {
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirmPassword").value;

    if (confirm === '') {
        document.getElementById("pwrdc").innerHTML =
        "Please confirm your password"
    } else if (confirm !== password) {
        document.getElementById("pwrdc").innerHTML =
        "Password is not matching"
    } else {
        document.getElementById("pwrdc").innerHTML =
        ''
        return true;
    }

    if (password === '') {
        document.getElementById("pwrd").innerHTML = 
        'Please enter a password' 
    } else if (password.length < 8) {
        document.getElementById("pwrd").innerHTML =
        'Please enter 8 characters'
    } else {
        document.getElementById("pwrd").innerHTML =
        ''
        return true;
    }
}

function checkEmail() {
    const email = document.getElementById("email").value;
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.match(regex)) {
        return true
    } else {
        return false;
    }
}

export function handleRegister() {
    if (checkPassword() === true && checkEmail() === true) {
        const registerForm = document.getElementById("formData");
        registerForm.submit();
        return true;
    } else {
        return false;
    }
}