// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';

// const Auth = () => {
//     const navigate = useNavigate();

//     const [nom, setNom] = useState("");
//     const [prenom, setPrenom] = useState("");
//     const [error, setError] = useState(null);

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8888/hosto-project/auth/auth.php', { nom, prenom });
//             if (response.data.status === 'success') {
//                 const role = response.data.role;
//                 switch (role) {
//                     case 'Infirmier':
//                         navigate('/infirmier/accueil');
//                         break;
//                     case 'Medecin':
//                         navigate('/medecin/consultation');
//                         break;
//                     case 'Sage-femme':
//                         navigate('/sage-femme/patiente');
//                         break;
//                     case 'Receptionniste':
//                         navigate('/receptionniste/dossier');
//                         break;
//                     case 'Aide-soignante':
//                         navigate('/aide-soignante/list-patient');
//                         break;
//                     default:
//                         setError("Rôle inconnu");
//                         toast.error("Rôle inconnu");
//                 }
//             } else {
//                 setError("Identifiants incorrects");
//                 toast.error("Nom ou prénom incorrects");
//             }
//         } catch (error) {
//             console.log(error)
//             setError("Erreur de requête");
//             toast.error("Une erreur s'est produite. Veuillez réessayer.");
//         }
//     };

//     return (
//         <>
//             <ToastContainer />
//             <section className="bg-gray-50 dark:bg-gray-900">
//                 <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//                     <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//                         <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//                             <h1 className="text-md text-center font-medium leading-tight tracking-tight text-blue-900 md:text-2xl dark:text-white">Bienvenue sur Hosto, veuillez vous connecter</h1>

//                             <div className="flex justify-center items-center gap-2">
//                                 <img className='w-12 h-12' src="https://cdn3.iconfinder.com/data/icons/internet-2-10/48/96-512.png" alt="Image connexion" />
//                                 <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//                                     Connexion
//                                 </h1>
//                             </div>
//                             <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
//                                 <div>
//                                     <label htmlFor="nom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre nom</label>
//                                     <input value={nom} onChange={(e) => setNom(e.target.value)} type="text" name="nom" id="nom" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nom d'utilisateur" required />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="prenom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre prénom</label>
//                                     <input value={prenom} onChange={(e) => setPrenom(e.target.value)} type="text" name="prenom" id="prenom" placeholder="Prénom" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
//                                 </div>
//                                 <button type="submit" className="w-full text-white bg-sky-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Se connecter</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Auth;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Auth = () => {
    const navigate = useNavigate();

    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8888/hosto-project/auth/auth.php', { nom, prenom });
            if (response.data.status === 'success') {
                const role = response.data.role;
                const message = "Connexion réussie";
                switch (role) {
                    case 'Infirmier':
                        navigate('/infirmier/accueil', { state: { message } });
                        break;
                    case 'Medecin':
                        navigate('/medecin/consultation', { state: { message } });
                        break;
                    case 'Sage-femme':
                        navigate('/sage-femme/patiente', { state: { message } });
                        break;
                    case 'Receptionniste':
                        navigate('/receptionniste/dossier', { state: { message } });
                        break;
                    case 'Aide-soignante':
                        navigate('/aide-soignante/list-patient', { state: { message } });
                        break;
                    default:
                        setError("Rôle inconnu");
                        toast.error("Rôle inconnu");
                }
            } else {
                setError("Identifiants incorrects");
                toast.error("Nom ou prénom incorrects");
            }
        } catch (error) {
            console.log(error)
            setError("Erreur de requête");
            toast.error("Une erreur s'est produite. Veuillez réessayer.");
        }
    };

    return (
        <>
            <ToastContainer />
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-md text-center font-medium leading-tight tracking-tight text-blue-900 md:text-2xl dark:text-white">Bienvenue sur Hosto, veuillez vous connecter</h1>

                            <div className="flex justify-center items-center gap-2">
                                <img className='w-12 h-12' src="https://cdn3.iconfinder.com/data/icons/internet-2-10/48/96-512.png" alt="Image connexion" />
                                <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Connexion
                                </h1>
                            </div>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                                <div>
                                    <label htmlFor="nom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre nom</label>
                                    <input value={nom} onChange={(e) => setNom(e.target.value)} type="text" name="nom" id="nom" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nom d'utilisateur" required />
                                </div>
                                <div>
                                    <label htmlFor="prenom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre prénom</label>
                                    <input value={prenom} onChange={(e) => setPrenom(e.target.value)} type="text" name="prenom" id="prenom" placeholder="Prénom" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <button type="submit" className="w-full text-white bg-sky-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Se connecter</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Auth;
