import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './styles.css'
import Mainpage from './pages/Mainpage.jsx'
import {
    
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom";

import Movies from './pages/Movies.jsx'
import Tickets from './pages/Tickets.jsx'
import Reservations from './pages/Reservations'
import TicketForm from "./pages/TicketForm.jsx";
import Reserve from "./pages/Reserve.jsx";
import PageNotFound from "./pages/pageNotFound.jsx";
import App from "./App.jsx";
import AccountPage from "./pages/AccountPage.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={
            createBrowserRouter(
                createRoutesFromElements(
                    <Route path="/" element={<App />}>
                        <Route index element={<Mainpage />} />
                        <Route path=":id/:params" element={<TicketForm />} />
                        <Route path="movies" element={<Movies />} />
                        <Route path="tickets" element={<Tickets />} />
                        <Route path="reservations" element={<Reservations />} />
                        <Route path="*" element={<PageNotFound />} />
                        <Route path="reserve" element={<Reserve />} />
                        <Route path="account" element={<AccountPage />} />
                        <Route path="user">
                        <Route path="login" />
                        <Route path="register" />
                        </Route>
                    </Route>
                )
            )
        } />
    </React.StrictMode>
);
