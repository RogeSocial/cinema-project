import { useEffect, useState } from "react";

function checkPassword() {
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirmPassword").value;

    if (password === confirm) {
        return true;
    } else {
        alert("The entered passwords does not match")
        return false;
    }
}

function checkEmail() {
    const email = document.getElementById("email").value;
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.match(regex)) {
        return true
    } else {
        changeColor();
        alert("Please enter a valid e-mail adress")
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