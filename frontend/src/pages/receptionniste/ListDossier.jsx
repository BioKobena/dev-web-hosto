import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListDossier = () => {
    const [dossiers, setDossiers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [editing, setEditing] = useState(null);
    const [editForm, setEditForm] = useState({
        numerodossier: '',
        nom: '',
        prenom: '',
        datenaissance: '',
        lieunaissance: '',
        sexe: '',
        profession: '',
        contact: '',
        email: '',
        groupesanguin: '',
        antecedants: '',
        habitation: ''
    });

    useEffect(() => {
        const fetchDossiers = async () => {
            try {
                const response = await axios.get('http://localhost:8888/hosto-project/dossier/get_all_dossiers.php');
                if (response.data.status === "success") {
                    setDossiers(response.data.data);
                    setLoading(false);
                } else {
                    setError(response.data.message);
                    setLoading(false);
                }
            } catch (err) {
                setError("Erreur de requête");
                setLoading(false);
            }
        };
        fetchDossiers();
    }, []);

    const handleDelete = async (numerodossier) => {
        try {
            const response = await axios.delete('http://localhost:8888/hosto-project/dossier/delete_dossier.php', {
                data: { numerodossier }
            });
            if (response.data.status === "success") {
                setDossiers(dossiers.filter(dossier => dossier.NUMERODOSSIER !== numerodossier));
            } else {
                setError(response.data.message);
            }
        } catch (err) {
            setError("Erreur de requête");
        }
    };

    const handleEdit = (dossier) => {
        setEditing(dossier.NUMERODOSSIER);
        setEditForm(dossier);
    };

    const handleChange = (e) => {
        setEditForm({ ...editForm, [e.target.name]: e.target.value });
    };

    const handleUpdate = async () => {
        console.log(editForm);  // Log the form data
        try {
            const response = await axios.put('http://localhost:8888/hosto-project/dossier/update_dossier.php', editForm);
            if (response.data.status === "success") {
                setDossiers(dossiers.map(dossier => dossier.NUMERODOSSIER === editForm.numerodossier ? editForm : dossier));
                setEditing(null);
            } else {
                setError(response.data.message);
            }
        } catch (err) {
            setError("Erreur de requête");
        }
    };

    return (
        <div>
            {loading ? (
                <p>Chargement...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Numéro de Dossier</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Nom</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Prénom</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Date de Naissance</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {dossiers.map((dossier) => (
                            <tr key={dossier.NUMERODOSSIER}>
                                <td className="text-left py-3 px-4">{dossier.NUMERODOSSIER}</td>
                                <td className="text-left py-3 px-4">
                                    {editing === dossier.NUMERODOSSIER ? (
                                        <input
                                            type="text"
                                            name="nom"
                                            value={editForm.nom}
                                            onChange={handleChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block p-2.5"
                                        />
                                    ) : (
                                        dossier.NOM
                                    )}
                                </td>
                                <td className="text-left py-3 px-4">
                                    {editing === dossier.NUMERODOSSIER ? (
                                        <input
                                            type="text"
                                            name="prenom"
                                            value={editForm.prenom}
                                            onChange={handleChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block p-2.5"
                                        />
                                    ) : (
                                        dossier.PRENOM
                                    )}
                                </td>
                                <td className="text-left py-3 px-4">
                                    {editing === dossier.NUMERODOSSIER ? (
                                        <input
                                            type="date"
                                            name="datenaissance"
                                            value={editForm.datenaissance}
                                            onChange={handleChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block p-2.5"
                                        />
                                    ) : (
                                        dossier.DATENAISSANCE
                                    )}
                                </td>
                                <td className="text-left py-3 px-4">
                                    {editing === dossier.NUMERODOSSIER ? (
                                        <div>
                                            <button
                                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                                                onClick={handleUpdate}
                                            >
                                                Enregistrer
                                            </button>
                                            <button
                                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                                onClick={() => setEditing(null)}
                                            >
                                                Annuler
                                            </button>
                                        </div>
                                    ) : (
                                        <div>
                                            <button
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                                onClick={() => handleEdit(dossier)}
                                            >
                                                Modifier
                                            </button>
                                            <button
                                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                                onClick={() => handleDelete(dossier.NUMERODOSSIER)}
                                            >
                                                Supprimer
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ListDossier;
