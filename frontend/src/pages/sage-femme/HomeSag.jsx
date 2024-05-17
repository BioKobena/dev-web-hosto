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
            <div className='bg-gray-50 w-screen h-screen'>
                Bienvenue sur ma page
            </div>
            <FooterComponenet />
        </>
    )
}

export default HomeSag