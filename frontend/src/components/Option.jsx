import React from 'react'
import { Link } from 'react-router-dom'
const Option = () => {

    const specialist = [
        {
            id: 1,
            name: 'Infirmier',
        },
        {
            id: 2,
            name: 'Medecin',
        },
        {
            id: 3,
            name: 'Sage femme',
        },
        {
            id: 1,
            name: 'Receptionniste',
        },
        // {
        //     id: 1,
        //     name: 'Laboratoire',
        // }
    ]

    return (
        <div className=' bg-sky-300 w-screen h-screen flex flex-col gap-1 justify-center items-center overflow-hidden '>
            <div className='m-8'>
                <h1 className='text-4xl text-center font-medium text-white'>Veuillez choisir votre spécialité</h1>
            </div>
            <div className='w-full h-full flex flex-wrap items-center justify-center gap-4'>


                {specialist.map((items) => {
                    return (
                        <div key={items.id} className='specialist w-2/6 h-2/5 bg-white flex items-center justify-center rounded-md font-bold text-3xl text-neutral-500 hover:bg-sky-100'>
                            {items.name}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Option;