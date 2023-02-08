function validateInputs() {
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirmPassword").value;
    const email = document.getElementById("email").value;
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const fullname = document.getElementById("fullname").value;
    let valid = true;

    if (confirm === '') {
        document.getElementById("pwrdc").innerHTML =
            "Please confirm your password"
        valid = false;
    } else if (confirm !== password) {
        document.getElementById("pwrdc").innerHTML =
            "Password is not matching"
        valid = false;
    } else {
        document.getElementById("pwrdc").innerHTML =
            ''
    }

    if (password === '') {
        document.getElementById("pwrd").innerHTML =
            'Please enter a password'
        valid = false;
    } else if (password.length < 8) {
        document.getElementById("pwrd").innerHTML =
            'Please enter 8 characters'
        valid = false;
    } else {
        document.getElementById("pwrd").innerHTML =
            ''
    }

    if (email === '') {
        document.getElementById("mail").innerHTML =
            'Email is required'
        valid = false;
    } else if (!email.match(regex)) {
        document.getElementById("mail").innerHTML =
            'Provide a valid email address'
        valid = false;
    } else {
        document.getElementById("mail").innerHTML =
            ''
    }


    if (fullname === '') {
        document.getElementById("name").innerHTML =
            'Name is required'
        valid = false;
    } else {
        document.getElementById("name").innerHTML =
            ''
    }

    return valid;
}

export function handleRegister() {
    if (validateInputs() === true) {
        const registerForm = document.getElementById("formData");
        registerForm.submit();
        return true;
    } else {
        return false;
    }
}