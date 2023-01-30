import React from 'react';
import '../styles/errorBoundary.css'
import {isRouteErrorResponse, useRouteError} from "react-router-dom";

function ErrorBoundary() {
    const error = useRouteError();
    if(isRouteErrorResponse(error)){
        if(error.status === 404){
            return <div className={"error"}>
                <h2>Error 404</h2>
                <h3> This page doesn't exist!</h3>
            </div>
        }
        if (error.status === 401) {
            return <div className={"error"}>
                <h2>Error 401</h2>
                <h3>You aren't authorized to see this</h3></div>;
        }

        if (error.status === 503) {
            return <div className={"error"}>
                <h2>Error 503</h2>
                <h3>Looks like our API is down</h3></div>;
        }

        if (error.status === 418) {
            return <div className={"error"}>
                <h2>Error 418</h2>
               <h3> I'm a teapot 🫖</h3>
            </div>;
        }
    }
    return <div className={"error"}>
        <h3>Something went wrong</h3>
    </div>
}

export default ErrorBoundary;