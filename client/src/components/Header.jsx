import React, { useState, useEffect, useRef } from "react";

export default function () {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };


  //Close menu when click outside.
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
        <h1>Codinema</h1>
        <aside>
          <div className="hamburger-icon" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </aside>
        <nav>
          <a href="/">Home</a>
          <a href="#movies">Movies</a>
          <a href="#tickets">Tickets</a>
          <a href="calender">Calender</a>
        </nav>
      </header>
      {openMenu ? (
        <div ref={menuRef} className="dropdown-menu">
          <a href="/">Home</a>
          <a href="#movies">Movies</a>
          <a href="#tickets">Tickets</a>
          <a href="calender">Calender</a>
        </div>
      ) : null}


    </>
  );
}
