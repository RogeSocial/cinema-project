import React from 'react';
import '../styles/reservePage.css'
import ShowCaseSeats from '../components/ShowCaseSeats';
import TheaterSeats from '../components/TheaterSeats';

export default function () {
    return (<section className='reserveSection'>
        <ShowCaseSeats />
        <div className="screen"></div>
        <TheaterSeats />
    </section>
    )
}
