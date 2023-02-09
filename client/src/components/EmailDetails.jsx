import React, {useContext} from "react";
import globalContext from "../GlobalContext.jsx";

export default function EmailDetails({setEmail}) {
    const {auth} = useContext(globalContext)

    return <><label htmlFor="email">E-mail: </label>
        <input type={"email"} name={"email"} id={"email"} className={"input-element"} disabled={true}
               defaultValue={auth.email} onChange={event => setEmail(event.target.value)} required></input>
    </>
}