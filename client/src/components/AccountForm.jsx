import {useState, useEffect} from "react";

export default function () {

    const [ isEditable, setIsEditable ] = useState(false);
    const [ isPassEditable, setIsPassEditable ] = useState(false);

    function changeEditable() {
        !isEditable ? setIsEditable(true) : setIsEditable(false)
    }

    useEffect(() => {
        const element = document.getElementsByClassName("input-element")
        const saveButton = document.getElementById("account-button")

        for(let i = 0; i < element.length; i++) {
            element[i].disabled = isEditable;
        }

        saveButton.disabled = isEditable
    }, [isEditable]);



    useEffect(() => {
        const passwordCheckbox = document.getElementById("change-password")
        const passElement = document.getElementsByClassName("passInput")

        if (passwordCheckbox.checked === false) {
            for (let i = 0; i < passElement.length; i++) {
                passElement[i].disabled = isPassEditable;
            }
        } else if (passwordCheckbox.checked === true) {
            for (let i = 0; i < passElement.length; i++) {
                passElement[i].disabled = setIsPassEditable(true)
            }
        }

    }, [isPassEditable]);


    return <>

    <form disabled={true}>
        <label htmlFor="name">Full name: </label>
        <input type={"text"} name={"name"} id={"name"} className={"input-element"} value={"Name McNameson"} disabled={true} />

        <label htmlFor="name">Tel: </label>
        <input type={"tel"} name={"tel"} id={"tel"} className={"input-element"} value={"0123456789"} disabled={true} />

        <label htmlFor="email">E-mail: </label>
        <input type={"email"} name={"email"} id={"email"} className={"input-element"} value={"name@nameenterprises.com"} required disabled={true} />

        <label htmlFor="password">Current password: </label>
        <input type={"password"} name={"current-password"} id={"current-password"} className={"input-element"} required disabled={true}/>

        <label htmlFor="change-password">Change my password: </label>
        <input type={"checkbox"} name={"change-password"} id={"change-password"} className={"input-element"} disabled={true} />

        <label htmlFor={"new-password-one"}>New password: </label>
        <input type={"password"} name={"new-password-one"} id={"new-password-one"} className={"pass-input"} disabled={true} />

        <label htmlFor={"new-password-two"}>New password again: </label>
        <input type={"password"} name={"new-password-two"} id={"new-password-two"} className={"pass-input"} disabled={true} />

        <button id={"account-button"} disabled={true}>Save</button>
    </form>
        <button className={"account-button"} onClick={changeEditable}>Edit</button>
    </>
}