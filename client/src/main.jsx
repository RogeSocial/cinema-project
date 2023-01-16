import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom";
import Mainpage from "./components/Mainpage.jsx";
import Header from "./components/Header.jsx";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<App/>
<RouterProvider router={

createBrowserRouter(
    createRoutesFromElements(


        <Route path={'/'} element={<Header/>} >
          <Route index element={<Mainpage/>}/>
            <Route path={'Movies'}></Route>
            <Route path={'Tickets'}></Route>
        </Route>
    )
)

}/>


    <App />
  </React.StrictMode>,
)
