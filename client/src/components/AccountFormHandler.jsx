import React, {useContext, useState} from 'react';
import globalContext from "../GlobalContext.jsx";
import AccountDetailsHandler from "./AccountDetailsHandler.jsx";


function AccountFormHandler({email, changePassEditable,  setEmail}) {
    const {auth, changeAccountValues, deleteAccount} = useContext(globalContext)

    const [fullName, setFullName] = useState(auth.fullName)
    const [phoneNumber, setPhoneNumber] = useState(auth.phoneNumber)
    const [id, setId] = useState(auth.id)

    const submit = (e) => {
        e.preventDefault()
        changeAccountValues(email, fullName, phoneNumber, id)

    }
    return <form onSubmit={submit} id={"account-page-form"}>

        <AccountDetailsHandler setFullName={setFullName}
                               setPhoneNumber={setPhoneNumber}
                               setEmail={setEmail}/>


        <label htmlFor="password">Current password: </label>
        <input type={"password"} name={"current-password"} id={"current-password"} className={"input-element"}
               disabled={true} required/>

        <div id={"checkbox-container"}>
            <label htmlFor="change-password" id={"change-pass-label"}>Change password or Delete Account: </label>
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
        <button id={"logout-button"} className={"button pass-input"} onClick={() => deleteAccount(auth.email)}>Delete
            account
        </button>

    </form>


}








export default AccountFormHandler;