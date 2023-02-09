import React, {useContext, useState} from 'react';
import globalContext from "../GlobalContext.jsx";
import AccountDetailsHandler from "./AccountDetailsHandler.jsx";
import DeleteAndSaveButtons from "./DeleteAndSaveButtons.jsx";
import PasswordsAndCheckBox from "./PasswordsAndCheckBox.jsx";

function AccountFormHandler({email, changePassEditable, setEmail}) {
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
        <PasswordsAndCheckBox changePassEditable={changePassEditable}/>
        <DeleteAndSaveButtons/>
    </form>
}

export default AccountFormHandler;