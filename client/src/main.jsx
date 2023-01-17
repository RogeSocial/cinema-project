import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './styles.css'
import Mainpage from './components/Mainpage'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from './components/Footer.jsx'
import Calender from "./components/Calender.jsx"
import Movies from './components/Movies'
import Tickets from './components/Tickets'
import Reservations from './components/Reservations'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Header />
      <RouterProvider router={
          createBrowserRouter(createRoutesFromElements(
              <Route path={"/"}>
                  <Route index element={<Mainpage/>}/>
                  <Route path={"home"} element={<Mainpage/>}/>
                  <Route path={"calender"} element={<Calender/>}/>
                  <Route path={"movies"} element={<Movies/>}/>
                  <Route path={"tickets"} element={<Tickets/>}/>
                  <Route path={"reservations"} element={<Reservations/>}/>
              </Route>
                  )
                  )
                  }/>
<Footer />
  </React.StrictMode>,
)
