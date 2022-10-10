import React from 'react';
import { useRouteError } from 'react-router-dom';
import './ErrorPage.css'

const ErrorPage = () => {
    const error =useRouteError()
    return (
        <div className='height-100% d-flex flex-column justify-content-center align-items-center'>
           <h1>Ops! An Error Ocurred!</h1>
           {
            error && (
                <div>
                    <p>{error?.statusText || error?.message}</p>
                    <p>{error?.status}</p>
                </div>
            )
           }
        </div>
    );
};

export default ErrorPage;