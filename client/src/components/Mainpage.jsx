import React from "react";
import '../CSS/home.css'
import {Link} from "react-router-dom";

export default function() {
  return (
    <section>
      <div className="background-image">
          <h2 className="transparent-background">"WHATEVER YOU DO DON'T FALL 
          ASLEEP."</h2>
          <div className="center-btn">
          <Link to="user/login" ><button className="btn">LOGIN</button></Link>
          <Link to="user/login" className="btn"><button className="btn">SIGNUP</button></Link>
        </div>
      </div>
    </section>
  );
}
