import {useContext} from "react";
import GlobalContext from "../GlobalContext.jsx";

export default function () {
    async function old() {
    const {auth, setAuth} = useContext(GlobalContext)
    const {isLoading, setIsLoading} = useContext(GlobalContext)

        setIsLoading(true)
        const response = await fetch("/rest/login")
        console.log('loading auth')
        const result = await response.json()
        console.log('auth state: ', result)
        setAuth(result)
        setIsLoading(false)
        return auth;
    }
    const svar = old();
    return svar
}