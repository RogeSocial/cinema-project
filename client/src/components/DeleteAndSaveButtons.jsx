import React, {useContext} from "react";
import globalContext from "../GlobalContext.jsx";

export default function DeleteAndSaveButtons() {
    const {auth, deleteAccount} = useContext(globalContext)
    return <>
        <button id={"account-button"} className={"button"} disabled={true}>Save</button>
        <button id={"delete-account-button"} className={"button pass-input"} onClick={() => deleteAccount(auth.email)}>Delete
            account
        </button>
    </>
}