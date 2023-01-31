import React from 'react';
import '../styles/reservePage.css'
import SeatTypes from '../components/ShowCaseSeats';
import TheaterSeats from '../components/TheaterSeats';

export default function () {
    return (<section className='reserveSection'>
        <SeatTypes />
        <div className="screen"></div>
        <TheaterSeats />
    </section>
    )
}
