import React, { useState } from "react";
import {NavLink} from "react-router-dom";

export default function () {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
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
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')} >Home
          </NavLink>

          <NavLink to="calender" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Calender</NavLink>
          <NavLink to="movies" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Movies</NavLink>
          <NavLink to="tickets" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Tickets</NavLink>
        </nav>
      </header>
      {openMenu ? (
        <div className="dropdown-menu">
          <a href="/">Home</a>
          <a href="calender">Calender</a>
          <a href="#movies">Movies</a>
          <a href="#tickets">Tickets</a>
        </div>
      ) : null}

    </>
  );
}
