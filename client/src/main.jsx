import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Mainpage from './components/Mainpage'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<RouterProvider router={

createBrowserRouter(
    createRoutesFromElements(


        <Route path={'/'} element={<App/>} >
          <Route index element={<Mainpage />}/>
            
        </Route>
    )
)

}/>


    <App />
  </React.StrictMode>,
)
