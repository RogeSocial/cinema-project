export default function AccountConfirmPasswords() {
    return <>
        <label style={{display: " none"}}  htmlFor={"new-password-one"}>New password: </label>
        <input type={"password"} name={"new-password-one"} id={"new-password-one"} className={"pass-input"}
               style={{display: "none"}}  disabled={true}/>

        <label style={{display: " none"}}  htmlFor={"new-password-two"}>New password again: </label>
        <input type={"password"} name={"new-password-two"} id={"new-password-two"} className={"pass-input"}
               style={{display: " none"}}  disabled={true}/>
    </>
}