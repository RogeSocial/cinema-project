import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import GlobalContext from "../GlobalContext.jsx";
import AccountFormHandler from "./AccountFormHandler.jsx";

export default function () {
    const [isEditable, setIsEditable] = useState(true);
    const [isPassEditable, setIsPassEditable] = useState(true);

    const {
        logout,
        auth,
        changeAccountValues
    } = useContext(GlobalContext);
    const [email, setEmail] = useState(auth.email)
    const navigate = useNavigate();

    useEffect(() => {
        loginHandler()

    }, [auth]);



    //When edit-button is clicked


    useEffect(() => {
        const element = document.getElementsByClassName("input-element")
        const saveButton = document.getElementById("account-button")

        for (let i = 0; i < element.length; i++) {
            element[i].disabled = isEditable;
        }

        saveButton.disabled = isEditable
    }, [isEditable]);

    //When change password checkbox is clicked


    useEffect(() => {
        const passwordCheckbox = document.getElementById("change-password")
        const passElement = document.getElementsByClassName("pass-input")

        for (let i = 0; i < passElement.length; i++) {
            passElement[i].disabled = isPassEditable;
        }

        passwordCheckbox.checked ? passElement.disabled = false : passElement.disabled = true;
    }, [isPassEditable]);



    return <>
        <button id={"logout-button"} className={"button"} onClick={logout}>Logout</button>

        <button id={"edit-button"} className={"button"} onClick={changeEditable}>Edit account</button>
        <AccountFormHandler changePassEditable={changePassEditable}
                            setEmail={setEmail}
                            email={email}/>
    </>
    function changePassEditable() {
        !isPassEditable ? setIsPassEditable(true) : setIsPassEditable(false)
    }
    function changeEditable() {
        !isEditable ? setIsEditable(true) : setIsEditable(false)
        const editButton = document.getElementById("edit-button")
        editButton.disabled = true;
    }
    function loginHandler() {
        if (!auth.loggedIn) {
            navigate("/")
            if (email !== undefined) {
                return alert(`\n Your new/normal email is ${email} \n 
            Login to the email with your normal password`)
            }
        }
    }

}

