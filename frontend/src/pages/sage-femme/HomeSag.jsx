import React, { useEffect,useState} from 'react'
import Navbar from '../../components/Navbar'
import { Outlet } from 'react-router-dom';

const HomeSag = () => {
    const specialite = 'sage-femme';


    useEffect(() => {

        window.document.title = "Accueil Sage Femme"
    }, [])

    return (
        <>
            <Navbar specialite={specialite} />
        </>
    )
}

export default HomeSag