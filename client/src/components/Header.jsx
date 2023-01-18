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
        <h1>Codinema</h1>
        <aside>
          <div className="hamburger-icon" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </aside>
        <nav>
          <NavLink to={"/"} className={ActiveNav} >Home</NavLink>
          <NavLink to="calender" className={ActiveNav}>Calender</NavLink>
          <NavLink to="movies" className={ActiveNav}>Movies</NavLink>
          <NavLink to="tickets" className={ActiveNav}>Tickets</NavLink>
        </nav>
      </header>
      {openMenu ? (
        <div ref={menuRef}  className="dropdown-menu">
          <NavLink to="/">Home</NavLink>
          <NavLink to="calender">Calender</NavLink>
          <NavLink to="movies">Movies</NavLink>
          <NavLink to="tickets">Tickets</NavLink>
        </div>
      ) : null}

    </>
  );
}
