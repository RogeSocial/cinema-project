import React from "react";
import '../CSS/home.css'

export default function () {
  return (
    <div>
      <section>
        <div className="background-image">
          <div className="transparent-background">
            <h2>"WHATEVER YOU DO, <br></br> DON'T FALL ASLEEP."</h2>
          </div>
          <div className="center-btn">
            <button className="btn">LOGIN</button>
            <button className="btn">SIGNUP</button>
          </div>
        </div>
      </section>
      <section className="section-top-movies">
        <h1 className="title">Our top movies</h1>
      </section>
    </div>
  );
}
