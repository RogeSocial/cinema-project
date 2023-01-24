import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './styles.css'
import Mainpage from './components/Mainpage.jsx'
import {

    Route,
    BrowserRouter,
    Routes
} from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from './components/Footer.jsx'
import Calender from "./components/Calender.jsx"

import Movies from './components/Movies'
import Tickets from './components/Tickets'
import Reservations from './components/Reservations'
import ScrollToTop from "./components/scrollToTop.jsx";
import TicketForm from "./components/TicketForm.jsx";
import Reserve from "./components/Reserve.jsx";
import PageNotFound from "./components/pageNotFound.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


      <BrowserRouter>
          <ScrollToTop/>
          <Header />
          <Routes>
                <Route path="/" element={<Mainpage />} />
                <Route path="/:id/:param" element={<TicketForm />} />
                <Route path="tickets" element={<Calender />} />
                <Route path="/tickets/:id/:param" element={<TicketForm />} />
                <Route path="movies" element={<Movies />} />
                <Route path="movies/:id/:param" element={<TicketForm />} />
                <Route path="tickets" element={<Tickets />} />
                <Route path="reservations" element={<Reservations />} />
              <Route path="*" element={<PageNotFound/>}/>
                  <Route path="reserve" element={<Reserve />} />
                <Route path="ticket-form" element={<TicketForm />} />
                <Route path="user">
                    <Route path="login" />
                    <Route path="register" />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
  </React.StrictMode>
)
