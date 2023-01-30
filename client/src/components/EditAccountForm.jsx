export default function() {
    return <section>
        <h2>Account</h2>
        <form>
            <input type={"text"} id={"account-name"} placeholder={"Name"} />
            <input type={"text"} id={"account-last-name"} placeholder={"Last name"}/>
            <input type={"email"} placeholder={"account-email"}/>
            <input type={"password"} placeholder={"account-password"}/>
            <button type={"submit"}>Edit account</button>
            <button type={"submit"}>Log out</button>
        </form>
    </section>
}