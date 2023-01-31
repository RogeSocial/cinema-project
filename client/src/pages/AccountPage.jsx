import AccountForm from "../components/AccountForm.jsx";
import '../styles/account.css'

export default function() {
    return <section id={"account-body"}>
        <h2 id={"account-headline"}>Account</h2>
        <AccountForm />
    </section>
}