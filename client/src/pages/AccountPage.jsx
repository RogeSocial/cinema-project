import AccountForm from "../components/AccountForm.jsx";
import '../styles/accountPage.css'
import {useContext, useEffect} from "react";
import globalContext from "../GlobalContext.jsx";
import {useNavigate} from "react-router-dom";



export default function () {




    return <section id={"account-body"}>
        <h2 id={"account-headline"}>Account</h2>
        <AccountForm/>
    </section>


}
