import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import { FooterComponenet } from '../../components/Footer'
import { Outlet } from 'react-router-dom'

const HomeAide = () => {

    useEffect(() => {
        window.document.title = "Accueil Aide soignante"
    }, [window])

    const specialite = 'aide-soignante';

    return (
        <>
            <Navbar specialite={specialite} />
            <Outlet />
            <FooterComponenet />
        </>
    )
}

export default HomeAide