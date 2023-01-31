import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './styles.css'

import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom";

import ErrorBoundary from "./pages/errorBoundary.jsx";
import App from "./App.jsx";
const CalendarPage = React.lazy(() => import('./pages/CalendarPage.jsx'));
const HomePage = React.lazy(() => import('./pages/HomePage'));
const MoviePage = React.lazy(() => import('./pages/MoviePage'));
const ReservePage = React.lazy(() => import('./pages/ReservePage'));
const MovieDetailsPage  = React.lazy(() => import('./pages/MovieDetailsPage'));

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
