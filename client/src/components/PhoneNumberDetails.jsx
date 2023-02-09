import React, {useContext} from "react";
import globalContext from "../GlobalContext.jsx";

export default function PhoneNumberDetails({setPhoneNumber}) {
    const {auth} = useContext(globalContext)
    return <>
        <label htmlFor="name">Phone: </label>
        <input type={"tel"} name={"tel"} id={"tel"} className={"input-element"} disabled={true}
               defaultValue={auth.phoneNumber}
               onChange={event => setPhoneNumber(event.target.value)} required/>

    </>
}