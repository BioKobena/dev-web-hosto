import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { ToastContainer, toast } from 'react-toastify';

const HomeRec = () => {

    const location = useLocation()

    const specialite = 'receptionniste';

    useEffect(() => {
        if (location.state && location.state.message) {
            toast.success(`${location.state.message} 🥳`);
        }
        window.document.title = "Accueil Receptionniste";
    }, [location]);

    return (
        <div>
            <Navbar specialite={specialite} />
            <ToastContainer />
            <div className='flex justify-center'>
                <Outlet />
            </div>
        </div>
    );
}

export default HomeRec;
