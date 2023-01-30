import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './styles.css'
import HomePage from './pages/HomePage.jsx'
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom";

import MoviePage from './pages/MoviePage.jsx'
import TicketForm from "./pages/TicketForm.jsx";
import Reserve from "./pages/Reserve.jsx";
import ErrorBoundary from "./pages/errorBoundary.jsx";
import App from "./App.jsx";
import CalendarPage from "./pages/CalendarPage.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>} errorElement={<ErrorBoundary/>}>
            <Route index element={<HomePage/>}/>
            <Route path="movies">
                <Route index element={<MoviePage/>}/>
                <Route path=":id/:param" element={<TicketForm/>}/>
            </Route>
            <Route path="tickets" element={<CalendarPage/>}/>
            <Route path="reserve" element={<Reserve/>}/>
            <Route path="user">
                <Route path="login"/>
                <Route path="register"/>
            </Route>
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
