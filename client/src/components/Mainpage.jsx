import React from "react";
import '../CSS/home.css'
import Movies from "./Movies";
import {Link} from "react-router-dom";
import Quotes from "./Quotes.jsx";

export default function() {
  return (
    <section>
      <div className="background-image">
          <h2 className={"transparent-background"}><Quotes/></h2>
        <div className="center-btn">
            <Link to="user/login" ><button className="btn">LOGIN</button></Link>
            <Link to="user/register" className="btn"><button className="btn">SIGNUP</button></Link>
        </div>
      </div>
    </section>
  );
}
