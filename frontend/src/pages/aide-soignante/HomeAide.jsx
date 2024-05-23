import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
const HomeAide = () => {
    const location = useLocation()

    useEffect(() => {
        if (location.state && location.state.message) {
            toast.success(`${location.state.message} 🥳`);
        }
        window.document.title = "Accueil Aide soignante"
    }, [window])

    const specialite = 'aide-soignante';

    return (
        <>
            <Navbar specialite={specialite} />
            <ToastContainer />
            <Outlet />
        </>
    )
}

export default HomeAide