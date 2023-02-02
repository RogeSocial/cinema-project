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
import ReservePage from "./pages/ReservePage.jsx";
import MovieDetailsPage from "./pages/MovieDetailsPage.jsx";
import ErrorBoundary from "./pages/errorBoundary.jsx";
import App from "./App.jsx";
import CalendarPage from "./pages/CalendarPage.jsx";
import LoginPage from './pages/LoginPage'
import CreateAccountPage from './pages/CreateAccountPage'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>} errorElement={<ErrorBoundary/>}>
            <Route index element={<HomePage/>}/>
            <Route path="movies">
                <Route index element={<MoviePage/>}/>
                <Route path=":id/:param" element={<MovieDetailsPage/>}/>
            </Route>
            <Route path="tickets" element={<CalendarPage/>}/>
            <Route path="reserve" element={<ReservePage/>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="register" element={<CreateAccountPage />}/>
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
