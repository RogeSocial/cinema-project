import {Link} from "react-router-dom";
import React, {useContext, useEffect, useRef, useState} from "react";
import GlobalContext from "../GlobalContext.jsx";

export default function () {

    const {auth} = useContext(GlobalContext)
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    function closeMenu() {
        setIsOpen(false);
    }

    //Close hamburger menu when click outside.
    const menuRef = useRef()
    useEffect(() => {
        document.addEventListener('mousedown', onMouseDown);

        return () => document.removeEventListener('mousedown', onMouseDown)

        function onMouseDown(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) closeMenu()
        }
    })
    return <aside>
        <i onClick={toggleMenu} className="fa-solid fa-bars hamburger-icon"/>
        <NavItems/>
    </aside>

    function NavItems() {
        if (isOpen) return (
            <div ref={menuRef} className="dropdown-menu">
                <Link to="movies" onClick={() => setIsOpen(false)}>Movies</Link>
                <Link to="tickets" onClick={() => setIsOpen(false)}>Tickets</Link>

                {auth.loggedIn ?
                    <Link to="user/account" onClick={() => setIsOpen(false)}>Account</Link>
                    : <Link to="login" onClick={() => setIsOpen(false)}>Account</Link>}

            </div>
        )
        else return null

    }
}