import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { FooterComponenet } from '../../components/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const HomeMed = () => {
    const location = useLocation()


    const specialite = 'medecin';


    useEffect(() => {

        if (location.state && location.state.message) {
            toast.success(`${location.state.message} 🥳`);
        }
        window.document.title = "Accueil Medecin"
    }, [location])

    return (
        <>
            <ToastContainer />
            <Navbar specialite={specialite} />
            <div className='bg-gray-50 w-screen h-screen flex justify-center'>
                <Outlet />
            </div>
        </>
    )
}

export default HomeMed