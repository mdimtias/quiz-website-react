import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="container text-center mt-5">
            <h2>Page Not Found.</h2>
            <p>404 Error</p>
            <NavLink to="/" className="text-decoration-none">Home</NavLink>
        </div>
    );
};

export default ErrorPage;