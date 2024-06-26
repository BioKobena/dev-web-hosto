import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import { FooterComponenet } from '../../components/Footer'
import { Outlet } from 'react-router-dom'

const HomeInf = () => {

    useEffect(() => {
        window.document.title = "Accueil Infirmier"
    }, [])

    const specialite = 'infirmier';

    return (
        <>
            <Navbar specialite={specialite} />
            <Outlet />
            <FooterComponenet />
        </>
    )
}

export default HomeInf