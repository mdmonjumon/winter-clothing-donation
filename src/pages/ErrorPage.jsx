import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='min-h-screen min-w-screen flex flex-col gap-5 justify-center items-center'>
            <p className='font-semibold text-xl'>404 page | Page Not Found</p>
            <Link to='/' className='cursor-pointer text-lg text-slate-700'>Go back to Home</Link>
            
        </div>
    );
};

export default ErrorPage;