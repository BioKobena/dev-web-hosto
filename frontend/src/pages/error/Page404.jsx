import React from 'react'
import { useNavigate } from 'react-router-dom'

const Page404 = () => {
    const navigate = useNavigate();

    const Home = () =>{
        navigate('/')
    }

    return (
        <div className='w-screen flex flex-col justify-center items-center h-screen overflow-hidden'>
            <h1 className='font-bold text-4xl text-pink-800'>Page non trouvée</h1>
            <img src="https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif" alt="Page non trouvé : Erreur 404 " />
            <button onClick={Home} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Accueil
            </button>
        </div>
    )
}

export default Page404