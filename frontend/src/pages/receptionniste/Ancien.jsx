import React from 'react'
import { TextField } from '@mui/material'

const Ancien = () => {
    return (
        <div>
            <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center">Entrez l'identifiant du patient</label>
                <input type="password" name="password" id="password" placeholder="Identifiants" className="bg-gray-50 border border-gray-300 w-96 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
        </div>
    )
}

export default Ancien