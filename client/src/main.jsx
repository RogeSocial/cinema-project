import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<RouterProvider router={

createBrowserRouter(
    createRoutesFromElements(


        <Route path={'/'} element={<Header/>} >
          <Route index element={<Mainpage/>}/>
            
        </Route>
    )
)

}/>


    <App />
  </React.StrictMode>,
)
