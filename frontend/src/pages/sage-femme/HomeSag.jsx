import React, { useEffect,useState} from 'react'
import Navbar from '../../components/Navbar'
import { FooterComponenet } from '../../components/Footer';


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