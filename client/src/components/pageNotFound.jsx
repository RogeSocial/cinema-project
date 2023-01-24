import React from 'react';
import {useActionData} from "react-router-dom";
import '../CSS/pageNotFound.css'
function PageNotFound() {
    return (
        <section className="error">
            <h1>Page was not Found!</h1>
        </section>
    );
}

export default PageNotFound;