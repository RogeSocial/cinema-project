import {useState, useEffect} from "react";

export default function () {

    const [isEditable, setIsEditable] = useState(false);

    function changeEditable() {
        !isEditable ? setIsEditable(true) : setIsEditable(false)
        console.log(isEditable)
    }

    useEffect(() => {

        const element = document.getElementsByClassName("input-element")
        const saveButton = document.getElementById("account-button")

        for(let i = 0; i < element.length; i++) {
            element[i].disabled = isEditable;
        }

        saveButton.disabled = isEditable

    }, [isEditable]);

    return <>

    <form disabled={true}>
        <label htmlFor="name">Full name: </label>
        <input type={"text"} name={"name"} id={"name"} className={"input-element"} disabled={true} />

        <label htmlFor="email">E-mail: </label>
        <input type={"email"} name={"email"} id={"email"} className={"input-element"} disabled={true} />

        <label htmlFor="password">Current password: </label>
        <input type={"password"} name={"current-password"} id={"current-password"} className={"input-element"} disabled={true}/>

        <label htmlFor={"new-password-one"}>New password: </label>
        <input type={"password"} name={"new-password-one"} id={"new-password-one"} className={"input-element"} disabled={true}/>

        <label htmlFor={"new-password-two"}>New password again: </label>
        <input type={"password"} name={"new-password-two"} id={"new-password-two"} className={"input-element"} disabled={true}/>

        <button id={"account-button"} disabled={true}>Save</button>
    </form>
        <button className={"account-button"} onClick={changeEditable}>Edit</button>
    </>
}