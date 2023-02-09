import React from "react";
import FullNameDetails from "./FullNameDetails.jsx";
import PhoneNumberDetails from "./PhoneNumberDetails.jsx";
import EmailDetails from "./EmailDetails.jsx";

export default function AccountDetailsHandler({setFullName, setPhoneNumber, setEmail}) {
    return <><FullNameDetails setFullName={setFullName}/>
        <PhoneNumberDetails setPhoneNumber={setPhoneNumber}/>
        <EmailDetails setEmail={setEmail}/>
    </>
}
