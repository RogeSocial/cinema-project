import React from "react";
import '../CSS/home.css'
import Movies from "./Movies";

export default function() {
  return (
    <section>
      <div className="background-image">
          <h2 className="transparent-background">"WHATEVER YOU DO DON'T FALL 
          ASLEEP."</h2>
          <div className="center-btn">
          <button className="btn">LOGIN</button>
          <button className="btn">SIGNUP</button>
        </div>
      </div>
    </section>
  );
}
