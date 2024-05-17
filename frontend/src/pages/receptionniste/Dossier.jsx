import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const Dossier = () => {
    const location = useLocation();

    return (
        <div className="bg-gray-50  w-full h-screen flex flex-col items-center gap-4">
            <h1 className='text-4xl font-semibold text-indigo-900'>Choisissez une option</h1>
            <div className="flex justify-center items-center gap-8">
                <NavLink
                    to="/receptionniste/dossier/nouveau"
                    className={`text-2xl text-blue-900 ${location.pathname === '/receptionniste/dossier/nouveau' ? 'border-b-4 border-lime-400' : ''}`}
                >
                    Nouveau
                </NavLink>
                <NavLink
                    to="/receptionniste/dossier/ancien"
                    className={`text-2xl flex flex-col text-blue-900 ${location.pathname === '/receptionniste/dossier/ancien' ? 'border-b-4 border-lime-400' : ''}`}
                >
                    Ancien
                </NavLink>
            </div>
            <Outlet />
        </div>
    );
};

export default Dossier;
