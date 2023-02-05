import AccountForm from "../components/AccountForm.jsx";
import '../styles/accountPage.css'
import {useContext} from "react";
import globalContext from "../GlobalContext.jsx";
import {useNavigate} from "react-router-dom";



export default function () {
    const {auth} = useContext(globalContext)
    const navigate = useNavigate();

    if(!auth.loggedIn){
        return <section id={"account-body"}>
            <form id={"account-page-form"}>
                <h4>Login to access Account page</h4>
                <button id={"login-button"} className={"button"} onClick={redirectToLogin}>Login</button>

            </form>
        </section>
    } else return <section id={"account-body"}>
            <h2 id={"account-headline"}>Account</h2>
         <AccountForm/>
        </section>

async function redirectToLogin(){
    return navigate("/user/login")
}

}
