import React, { useState, useEffect, useRef } from "react";
import {NavLink} from "react-router-dom";

export default function () {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  //Close hamburger menu when click outside.
  let menuRef = useRef();
  useEffect(() => {
    let handler = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
    document.removeEventListener('mousedown', handler)
    }
  });


  const ActiveNav = ({ isActive }) => {
     return isActive ? 'active' : 'inactive';
  }
  return (
    <>
      <header>
        <NavLink to={'/'}> <h1>Codinema</h1></NavLink>
        <aside>
          <div className="hamburger-icon" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </aside>
        <nav>
          <NavLink to={"/"} className={ActiveNav} id='navbar' >Home</NavLink>
          <NavLink to="movies" className={ActiveNav} id='navbar'>Movies</NavLink>
          <NavLink to="tickets" className={ActiveNav} id='navbar'>Tickets</NavLink>
          <NavLink to="reservations" className={ActiveNav} id='navbar'>Reservations</NavLink>
          <NavLink to="account" className={ActiveNav} id='navbar'>Account</NavLink>
          
        </nav>
      </header>
      {openMenu ? (
        <div ref={menuRef}  className="dropdown-menu">
          <NavLink to="/" onClick={() => setOpenMenu(false)}> Home</NavLink>
          <NavLink to="movies" onClick={() => setOpenMenu(false)}>Movies</NavLink>
          <NavLink to="tickets" onClick={() => setOpenMenu(false)}>Tickets</NavLink>
          <NavLink to="reservations"onClick={() => setOpenMenu(false)}>Reservations</NavLink>
          <NavLink to="account"onClick={() => setOpenMenu(false)}>Account</NavLink>
        </div>
      ) : null}

    </>
  );
}
