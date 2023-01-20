import React, { useState } from "react";
import '../CSS/reserve.css'

export default function() {

    useState()
    



    return (
      <section className="section-seatPicker">
    
      <ul className="showcase">
        <li>
            <div className="seat"></div>
            <small>N/A</small>
        </li>

        <li>
            <div className="seat selected"></div>
            <small>Selected</small>
        </li>

        <li>
            <div className="seat occupied"></div>
            <small>Occupied</small>
        </li>
      </ul>


      
        <div className="container" >
        <div className="screen"></div>
            <div className="row">
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat" ></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
            <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
            </div>
            <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
            <div className="row">
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
            </div>
            <div className="row">
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
            <div className="row">
                <div className="seat" classname="occuopied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
            
          
        </div>
        
        <p className="text">
            You have selected <span id="count">0</span> seats for a price of <span className="total">0</span> $
        </p>
        <button>Reserve</button>
      </section>
    );
  }