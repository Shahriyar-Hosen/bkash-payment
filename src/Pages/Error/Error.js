import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const Error = () => {
    return (
        <div>
            <Header/>
            <h1 className='text-5xl text-center m-5 p-5'> Page Not Found</h1>
            <Footer/>
        </div>
    );
};

export default Error;