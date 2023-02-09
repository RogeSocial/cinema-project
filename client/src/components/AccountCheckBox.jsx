export default function AccountCheckBox({changePassEditable}) {
    return <>
        <div id={"checkbox-container"}>
            <label htmlFor="change-password" id={"change-pass-label"}>Delete Account: </label>
            <input type={"checkbox"} name={"change-password"} id={"change-password"} className={"input-element"}
                   onClick={changePassEditable}/>
        </div>
    </>
}