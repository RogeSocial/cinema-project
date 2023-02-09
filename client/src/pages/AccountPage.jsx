import AccountForm from "../components/AccountForm.jsx";
import '../styles/accountPage.css'
import handImg from "../images/hand.png"

export default function() {
    return <section id={"account-body"}>
        <img className='handImg' src={handImg} alt=""/>
        <div className="accountContainer">
        <h2 id={"account-headline"}>Account</h2>
        <AccountForm />
        </div>
    </section>
}