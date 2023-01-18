import React from "react";
import '../CSS/home.css';
import Quotes from "./Quotes.jsx";

export default function() {
  return (
    <section>
      <div className="background-image">

          <h2 className={"transparent-background"}><Quotes/></h2>

        <div className="center-btn">
          <button className="btn">LOGIN</button>
          <button className="btn">SIGNUP</button>
        </div>
      </div>
    </section>
  );
}
