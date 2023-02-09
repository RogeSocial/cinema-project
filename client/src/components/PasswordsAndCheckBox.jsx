import AccountCheckBox from "./AccountCheckBox.jsx";
import AccountConfirmPasswords from "./AccountConfirmPasswords.jsx";

export default function PasswordsAndCheckBox({changePassEditable}) {
    return <>
        <AccountCheckBox changePassEditable={changePassEditable}/>
        <AccountConfirmPasswords/>
    </>
}