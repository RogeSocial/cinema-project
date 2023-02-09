import React from "react";

export default function AccountPasswordDetails() {
    return <>
        <label htmlFor="password">Current password: </label>
        <input type={"password"} name={"current-password"} id={"current-password"} className={"input-element"}
               disabled={true} required/>
    </>
}