import React, { useState } from 'react';
import { TextField, Button, Box, Grid, Paper } from '@mui/material';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

export default function Nouveau() {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [datenaissance, setDatenaissance] = useState('');
    const [lieunaissance, setLieuNaissance] = useState('');
    const [sexe, setSexe] = useState('');
    const [profession, setProfession] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [groupesanguin, setGroupesanguin] = useState('');
    const [antecedants, setAntecedants] = useState('');
    const [habitation, setHabitation] = useState('');

    const handleCreateDossier = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8888/hosto-project/receptionniste/patient.php', {
                nom,
                prenom,
                datenaissance,
                lieunaissance,
                sexe,
                profession,
                contact,
                email,
                groupesanguin,
                antecedants,
                habitation
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            setNom("")
            setPrenom("")
            setDatenaissance("")
            setLieuNaissance("")
            setSexe("")
            setProfession("")
            setGroupesanguin("")
            setEmail("")
            setAntecedants("")
            setHabitation("")
            setContact("")

            console.log(response)

            toast.success(`${response.data.message} `);
        } catch (error) {
            toast.error("Ahi 🤕");
            console.error("Erreur:", error);
        }
    };
    return (
        <div className="w-3/5 h-full bg-white p-4">
            <ToastContainer />
            <h1 className="text-2xl p-2 text-center font-medium leading-tight tracking-tight text-blue-900 font-semibold">INFORMATIONS DU PATIENT</h1>
            <form onSubmit={handleCreateDossier} className="flex flex-col gap-4 w-full h-full">
                <div>
                    <label htmlFor="nom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom</label>
                    <input required type="text" name="nom" id="nom" value={nom} onChange={(e) => setNom(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nom" />
                </div>
                <div>
                    <label htmlFor="prenom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prénoms</label>
                    <input required type="text" name="prenom" id="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} placeholder="Prénoms" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="datenaissance" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date de naissance</label>
                    <input required type="date" name="datenaissance" id="datenaissance" value={datenaissance} onChange={(e) => setDatenaissance(e.target.value)} placeholder="Date de naissance" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="lieunaissance" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lieu de naissance</label>
                    <input required type="text" name="lieunaissance" id="lieunaissance" value={lieunaissance} onChange={(e) => setLieuNaissance(e.target.value)} placeholder="Lieu de naissance" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-900 dark:text-gray-300">Sexe</label>
                    <div className="flex justify-start gap-4 items-center">
                        <div className="flex items-center">
                            <input id="sexe-homme" type="radio" value="Homme" name="sexe" checked={sexe === 'Homme'} onChange={(e) => setSexe(e.target.value)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="sexe-homme" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Homme</label>
                        </div>
                        <div className="flex items-center">
                            <input id="sexe-femme" type="radio" value="Femme" name="sexe" checked={sexe === 'Femme'} onChange={(e) => setSexe(e.target.value)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="sexe-femme" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Femme</label>
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="profession" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profession</label>
                    <input required type="text" name="profession" id="profession" value={profession} onChange={(e) => setProfession(e.target.value)} placeholder="Profession" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="contact" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact</label>
                    <input required type="text" name="contact" id="contact" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Contact" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input required type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="groupesanguin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Groupe sanguin</label>
                    <select id="groupesanguin" value={groupesanguin} onChange={(e) => setGroupesanguin(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="">Sélectionner</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="AB">AB</option>
                        <option value="O">O</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="antecedants" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Antécédants</label>
                    <textarea id="antecedants" rows="4" value={antecedants} onChange={(e) => setAntecedants(e.target.value)} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Antécédants..."></textarea>
                </div>
                <div>
                    <label htmlFor="habitation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Habitation</label>
                    <select id="habitation" value={habitation} onChange={(e) => setHabitation(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="">Sélectionner</option>
                        <option value="Yopougon">Yopougon</option>
                        <option value="Treichville">Treichville</option>
                        <option value="Cocody">Cocody</option>
                        <option value="Abobo">Abobo</option>
                        <option value="Anyama">Anyama</option>
                        <option value="Port Bouet">Port Bouet</option>
                        <option value="Marcory">Marcory</option>
                        <option value="Koumassi">Koumassi</option>
                    </select>
                </div>
                <button type="submit" className="w-full text-white bg-sky-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Enregistrer</button>
            </form>
        </div>
    );
}
