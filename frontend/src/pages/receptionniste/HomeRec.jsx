import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { FooterComponenet } from '../../components/Footer';

const HomeRec = () => {
    const specialite = 'receptionniste';

    useEffect(() => {
        window.document.title = "Accueil Receptionniste";
    }, []);

    return (
        <div>
            <Navbar specialite={specialite} />
            <div className='flex justify-center items-center'>
                <Outlet />
            </div>
            {/* <FooterComponenet /> */}
        </div>
    );
}

export default HomeRec;
