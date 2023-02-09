import AccountForm from "../components/AccountForm.jsx";
import '../styles/accountPage.css'

export default function() {
    return <section id={"account-body"}>
        <div className="accountContainer">
        <h2 id={"account-headline"}>Account</h2>
        <AccountForm />
        </div>
    </section>
}