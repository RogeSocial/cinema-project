import {useContext} from "react";
import GlobalContext from "../GlobalContext.jsx";

export default function () {
    const {auth} = useContext(GlobalContext)
    return auth
}