import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import GlobalContext from "../GlobalContext.jsx";

export default function () {
    const {logout} = useContext(GlobalContext)
    const [isEditable, setIsEditable] = useState(true);
    const [isPassEditable, setIsPassEditable] = useState(true);
    const {auth} = useContext(GlobalContext);
    const navigate = useNavigate();

    useEffect(() => {
        loginHandler()

    }, [auth]);

    function loginHandler() {
        if (!auth.loggedIn) {
            navigate("/")
        }
    }

    //When edit-button is clicked
    function changeEditable() {
        !isEditable ? setIsEditable(true) : setIsEditable(false)
        const editButton = document.getElementById("edit-button")
        editButton.disabled = true;
    }

    useEffect(() => {
        const element = document.getElementsByClassName("input-element")
        const saveButton = document.getElementById("account-button")

        for (let i = 0; i < element.length; i++) {
            element[i].disabled = isEditable;
        }

        saveButton.disabled = isEditable
    }, [isEditable]);

    //When change password checkbox is clicked
    function changePassEditable() {
        !isPassEditable ? setIsPassEditable(true) : setIsPassEditable(false)
    }

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
        <form id={"account-page-form"}>
            <label htmlFor="name">Full name: </label>
            <input type={"text"} name={"name"} id={"name"} className={"input-element"} defaultValue={auth.fullName}
                   required/>

            <label htmlFor="name">Phone: </label>
            <input type={"tel"} name={"tel"} id={"tel"} className={"input-element"} disabled={true}
                   defaultValue={auth.phoneNumber} required/>

            <label htmlFor="email">E-mail: </label>
            <input type={"email"} name={"email"} id={"email"} className={"input-element"} disabled={true}
                   defaultValue={auth.email} required></input>

            <label htmlFor="password">Current password: </label>
            <input type={"password"} name={"current-password"} id={"current-password"} className={"input-element"}
                   disabled={true} required/>

            <div id={"checkbox-container"}>
                <label htmlFor="change-password" id={"change-pass-label"}>Change password: </label>
                <input type={"checkbox"} name={"change-password"} id={"change-password"} className={"input-element"}
                       onClick={changePassEditable}/>
            </div>

            <label htmlFor={"new-password-one"}>New password: </label>
            <input type={"password"} name={"new-password-one"} id={"new-password-one"} className={"pass-input"}
                   disabled={true}/>

            <label htmlFor={"new-password-two"}>New password again: </label>
            <input type={"password"} name={"new-password-two"} id={"new-password-two"} className={"pass-input"}
                   disabled={true}/>

            <button id={"account-button"} className={"button"} disabled={true}>Save</button>

        </form>

    </>
}