import LoginForm from "../components/LoginForm"
import {useContext, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import globalContext from "../GlobalContext.jsx";

export default function () {
    const {auth} = useContext(globalContext);
    const navigate = useNavigate()
    useEffect(() => {
        if(auth.loggedIn){
            redirectToAccount()
        }
    }, [Link]);
    return (
    <LoginForm />
    )

}