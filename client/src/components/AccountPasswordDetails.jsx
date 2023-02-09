import React from "react";

export default function AccountPasswordDetails() {
    return <>
        <label style={{display: " none"}}  htmlFor="password">Current password: </label>
        <input type={"password"} name={"current-password"} id={"current-password"} className={"input-element"}
              style={{display: " none"}} disabled={true} required/>
    </>
}