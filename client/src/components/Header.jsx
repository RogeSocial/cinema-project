import React, { useState, useEffect, useRef } from "react";
import {Link, NavLink} from "react-router-dom";

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


  return (
    <>
      <header>
        <Link to={'/'}> <h1>Codinema</h1></Link>
        <aside>
          <div className="hamburger-icon" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </aside>
        <nav>
          <Link to={"/"}  id='navbar' >Home</Link>
          <Link to="movies"  id='navbar'>Movies</Link>
          <Link to="tickets"  id='navbar'>Tickets</Link>
          <Link to="reservations"  id='navbar'>Reservations</Link>
          <Link to="account"  id='navbar'>Account</Link>
          
        </nav>
      </header>
      {openMenu ? (
        <div ref={menuRef}  className="dropdown-menu">
          <Link to="/" onClick={() => setOpenMenu(false)}> Home</Link>
          <Link to="movies" onClick={() => setOpenMenu(false)}>Movies</Link>
          <Link to="tickets" onClick={() => setOpenMenu(false)}>Tickets</Link>
          <Link to="reservations"onClick={() => setOpenMenu(false)}>Reservations</Link>
          <Link to="account"onClick={() => setOpenMenu(false)}>Account</Link>
        </div>
      ) : null}

    </>
  );
}
