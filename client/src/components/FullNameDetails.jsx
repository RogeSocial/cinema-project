import React, {useContext} from "react";
import globalContext from "../GlobalContext.jsx";

export default function FullNameDetails({setFullName}) {
    const {auth} = useContext(globalContext)

    return <> <label htmlFor="name">Full name: </label>
        <input type={"text"} name={"name"} id={"name"} className={"input-element"} defaultValue={auth.fullName}
               onChange={event => setFullName(event.target.value)} required/>
    </>
}