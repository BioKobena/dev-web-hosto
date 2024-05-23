// Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ specialite, handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-dark-400 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://cdn4.iconfinder.com/data/icons/medical-115/60/medical-flat-098-heart-beat-1024.png" className="h-8" alt="Flowbite Logo" />
          <span className="self-cente font-semibold whitespace-nowrap dark:text-white">Hosto</span>
        </NavLink>
        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only"></span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${isOpen ? '' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

            {specialite === 'infirmier' && (
              <>
                <li>
                  <NavLink
                    to="/infirmier/accueil"
                    className={({ isActive }) =>
                      `block py-2 px-3 text-gray-900 font-semibold text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${isActive ? 'text-sky-800 text-2xl border-8' : ''}`
                    }
                  >
                    Accueil
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/infirmier/patient"
                    className={({ isActive }) =>
                      `block py-2 px-3 text-gray-900 font-semibold text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${isActive ? 'text-sky-800 text-2xl border-8' : ''}`
                    }
                  >
                    Patients
                  </NavLink>
                </li>
              </>
            )}
            {specialite === 'medecin' && (
              <>
                <li>
                  <NavLink
                    to="/medecin/consultation"
                    className={({ isActive }) =>
                      `block py-2 px-3 text-gray-900 font-semibold text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${isActive ? 'text-sky-800 text-2xl border-8' : ''}`
                    }
                  >
                    Consultation
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/medecin/rdv"
                    className={({ isActive }) =>
                      `block py-2 px-3 text-gray-900 font-semibold text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${isActive ? 'text-sky-800 text-2xl border-8' : ''}`
                    }
                  >
                    Rendez-vous
                  </NavLink>
                </li>
              </>
            )}
            {specialite === 'sage-femme' && (
              <>
                <li>
                  <NavLink
                    to="/sage-femme/patientes"
                    className={({ isActive }) =>
                      `block py-2 px-3 text-gray-900 font-semibold text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${isActive ? 'text-sky-800 text-2xl border-8' : ''}`
                    }
                  >
                    Patientes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/sage-femme/rdv"
                    className={({ isActive }) =>
                      `block py-2 px-3 text-gray-900 font-semibold text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${isActive ? 'text-sky-800 text-2xl border-8' : ''}`
                    }
                  >
                    RDV
                  </NavLink>
                </li>
              </>
            )}
            {specialite === 'receptionniste' && (
              <>
                <li>
                  <NavLink
                    to="/receptionniste/dossier/nouveau"
                    className={({ isActive }) =>
                      `block py-2 px-3 text-gray-900 font-semibold text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${isActive ? 'text-sky-800 text-2xl border-8' : ''}`
                    }
                  >
                    Dossier
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/receptionniste/rdv"
                    className={({ isActive }) =>
                      `block py-2 px-3 text-gray-900 font-semibold text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${isActive ? 'text-sky-800 text-2xl border-8' : ''}`
                    }
                  >
                    RDV
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/receptionniste/list-dossier"
                    className={({ isActive }) =>
                      `block py-2 px-3 text-gray-900 font-semibold text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${isActive ? 'text-sky-800 text-2xl border-8' : ''}`
                    }
                  >
                    Liste dossiers
                  </NavLink>
                </li>
              </>
            )}
            {specialite === 'aide-soignante' && (
              <>
                <li>
                  <NavLink
                    to="/aide-soignante/list-patient"
                    className={({ isActive }) =>
                      `block py-2 px-3 text-gray-900 font-semibold text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${isActive ? 'border border-blue-700 text-blue-800' : ''}`
                    }
                  >
                    Liste patients
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink
                    to="/aide-soignante"
                    className={({ isActive }) =>
                      `block py-2 px-3 text-gray-900 font-semibold text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${isActive ? 'text-sky-800 text-2xl border-8' : ''}`
                    }
                  >
                    RDV
                  </NavLink>
                </li> */}
              </>
            )}
            <li>
              <NavLink
                to="/"
                className="block ont-semibold text-xl p-2 border-red-800 border-2 text-white bg-red-800 rounded "
                aria-current="page"
                onClick={handleLogout}
              >
                Se déconnecter
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
