export default function AccountConfirmPasswords() {
    return <>
        <label htmlFor={"new-password-one"}>New password: </label>
        <input type={"password"} name={"new-password-one"} id={"new-password-one"} className={"pass-input"}
               disabled={true}/>

        <label htmlFor={"new-password-two"}>New password again: </label>
        <input type={"password"} name={"new-password-two"} id={"new-password-two"} className={"pass-input"}
               disabled={true}/>
    </>
}