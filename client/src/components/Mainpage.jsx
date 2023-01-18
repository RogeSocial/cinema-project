import React from "react";
import '../CSS/home.css';
import Quotes from "./Quotes.jsx";

export default function() {
  return (
    <section>
      <div className="background-image">
        <div className="transparent-background">
          <h2><Quotes/></h2>
        </div>
        <div className="center-btn">
          <button className="btn">LOGIN</button>
          <button className="btn">SIGNUP</button>
        </div>
      </div>
    </section>
  );
}
