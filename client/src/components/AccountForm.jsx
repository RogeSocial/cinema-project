import {useState, useEffect} from "react";

export default function () {
    const [ isEditable, setIsEditable ] = useState(true);
    const [ isPassEditable, setIsPassEditable ] = useState(true);

    function changeEditable() {
        !isEditable ? setIsEditable(true) : setIsEditable(false)

    }

    useEffect(() => {
        const element = document.getElementsByClassName("input-element")
        const saveButton = document.getElementById("account-button")

        for(let i = 0; i < element.length; i++) {
            element[i].disabled = isEditable;
            if (element[i].checked === true) {
                element[i].checked = false;
            }
        }

        saveButton.disabled = isEditable
    }, [isEditable]);



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

        <button className={"account-button"} onClick={changeEditable}>Edit</button>

    <form id={"account-page-form"} disabled={true}>
        <label htmlFor="name">Full name: </label>
        <input type={"text"} name={"name"} id={"name"} className={"input-element"} />

        <label htmlFor="name">Phone: </label>
        <input type={"tel"} name={"tel"} id={"tel"} className={"input-element"} disabled={true} />

        <label htmlFor="email">E-mail: </label>
        <input type={"email"} name={"email"} id={"email"} className={"input-element"}  required disabled={true} />

        <label htmlFor="password">Current password: </label>
        <input type={"password"} name={"current-password"} id={"current-password"} className={"input-element"} required disabled={true}/>

        <label htmlFor="change-password">Change password: </label>
        <input type={"checkbox"} name={"change-password"} id={"change-password"} className={"input-element"} onClick={changePassEditable} />

        <label htmlFor={"new-password-one"}>New password: </label>
        <input type={"password"} name={"new-password-one"} id={"new-password-one"} className={"pass-input"} disabled={true} />

        <label htmlFor={"new-password-two"}>New password again: </label>
        <input type={"password"} name={"new-password-two"} id={"new-password-two"} className={"pass-input"} disabled={true} />

        <button id={"account-button"} disabled={true}>Save</button>
    </form>

    </>
}