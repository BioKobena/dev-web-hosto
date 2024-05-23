import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const Dossier = () => {
    const location = useLocation();

    return (
        <div className="bg-gray-50 w-full h-screen flex flex-col items-center gap-4">
            <h1 className='text-4xl font-semibold text-indigo-900 p-8'>Choisissez une option</h1>
            <div className="flex gap-8">
                <NavLink
                    to="/receptionniste/dossier/nouveau"
                    defaultValue={true}
                    className={`text-2xl text-blue-900 ${location.pathname === '/receptionniste/dossier/nouveau' ? 'border-b-4 border-lime-400 font-semibold' : ''}`}
                >
                    Nouveau
                </NavLink>
                <NavLink
                    to="/receptionniste/dossier/ancien"
                    className={`text-2xl text-blue-900 ${location.pathname === '/receptionniste/dossier/ancien' ? 'border-b-4 border-lime-400 font-semibold' : ''}`}
                >
                    Ancien
                </NavLink>
            </div>
            <Outlet />
        </div>
    );
};

export default Dossier;
