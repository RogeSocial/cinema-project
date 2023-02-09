import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import GlobalContext from "../GlobalContext.jsx";
import AccountFormHandler from "./AccountFormHandler.jsx";

export default function () {
    const [isEditable, setIsEditable] = useState(true);
    const [isDeleteable, setIsDeleteable] = useState(true);
    const {logout, auth} = useContext(GlobalContext);
    const [email, setEmail] = useState(auth.email)
    const navigate = useNavigate();

    useEffect(() => {
        loginHandler()
    }, [auth]);

    useEffect(() => {
        const element = document.getElementsByClassName("input-element")
        const saveButton = document.getElementById("account-button")

        for (let i = 0; i < element.length; i++) {
            element[i].disabled = isEditable;
        }

        saveButton.disabled = isEditable
    }, [isEditable]);

    useEffect(() => {
        const deletionCheckbox = document.getElementById("change-password")
        const checkboxElements = document.getElementsByClassName("pass-input")

        for (let i = 0; i < checkboxElements.length; i++) {
            checkboxElements[i].disabled = isDeleteable;
        }

        deletionCheckbox.checked ? checkboxElements.disabled = false : checkboxElements.disabled = true;
    }, [isDeleteable]);

    return <>
        <button id={"logout-button"} className={"button"} onClick={logout}>Logout</button>
        <button id={"edit-button"} className={"button"} onClick={changeEditable}>Edit account</button>
        <AccountFormHandler changePassEditable={enableDeletion}
                            setEmail={setEmail}
                            email={email}/>
    </>

    function enableDeletion() {
        !isDeleteable ? setIsDeleteable(true) : setIsDeleteable(false)
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