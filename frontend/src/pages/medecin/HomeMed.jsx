import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { FooterComponenet } from '../../components/Footer';
import { Outlet } from 'react-router-dom';
const HomeMed = () => {
    const specialite = 'medecin';


    useEffect(() => {

        window.document.title = "Accueil Medecin"
    }, [])

    return (
        <>
            <Navbar specialite={specialite} />
            <div className='bg-gray-50 w-screen h-screen'>
                <Outlet />
            </div>
        </>
    )
}

export default HomeMed