import React, { useState } from "react";

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
          <a href="/">Home</a>
          <a href="#movies">Movies</a>
          <a href="#tickets">Tickets</a>
          <a href="calender">Calender</a>
        </nav>
      </header>
      {openMenu ? (
        <div className="dropdown-menu">
          <a href="/">Home</a>
          <a href="#movies">Movies</a>
          <a href="#tickets">Tickets</a>
          <a href="calender">Calender</a>
        </div>
      ) : null}
    </>
  );
}
