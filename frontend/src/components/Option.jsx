import React from 'react'
import { Link } from 'react-router-dom'

const Option = () => {

    const specialist = [
        {
            id: 1,
            name: 'Infirmier',
            link: '/infirmier' // Ajoutez les liens correspondants à chaque spécialité
        },
        {
            id: 2,
            name: 'Medecin',
            link: '/medecin'
        },
        {
            id: 3,
            name: 'Sage femme',
            link: '/sage-femme'
        },
        {
            id: 4,
            name: 'Receptionniste',
            link: '/receptionniste'
        },
        // {
        //     id: 5,
        //     name: 'Laboratoire',
        //     link: '/laboratoire'
        // }
    ];
    return (
        <div className=' bg-sky-300 w-screen h-screen flex flex-col gap-1 justify-center items-center overflow-hidden '>
            <div className='m-8'>
                <h1 className='text-4xl text-center font-medium text-white'>Veuillez choisir votre spécialité</h1>
            </div>
            <div className='w-full h-full flex flex-wrap items-center justify-center gap-4'>

                {specialist.map((item) => (
                    <Link className='specialist w-2/6 h-2/5 bg-white flex items-center justify-center rounded-md font-bold text-3xl text-neutral-500 hover:bg-sky-100' key={item.id} to={item.link}>
                        {item.name}
                    </Link>
                ))}
                {/* {specialist.map((items) => {
                    return (
                        <div key={items.id} className='specialist w-2/6 h-2/5 bg-white flex items-center justify-center rounded-md font-bold text-3xl text-neutral-500 hover:bg-sky-100'>
                            {items.name}
                        </div>
                    )
                })} */}
            </div>
        </div>
    )
}

export default Option;