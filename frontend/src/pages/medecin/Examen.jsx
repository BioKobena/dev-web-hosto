import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ExamensComplementaires = ({ numeroDossier }) => {
    const [examens, setExamens] = useState([]);
    const [selectedExams, setSelectedExams] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8888/hosto-project/medecin/get_examens_complementaires.php')
            .then(response => {
                if (response.data.status === 'success') {
                    setExamens(response.data.data);
                } else {
                    toast.error(response.data.message);
                }
            })
            .catch(error => {
                toast.error('Erreur lors de la récupération des examens complémentaires');
            });
    }, []);

    const handleSelectChange = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
        setSelectedExams(selectedOptions);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8888/hosto-project/medecin/demande_examen.php', {
            numeroDossier,
            selectedExams
        })
            .then(response => {
                if (response.data.status === 'success') {
                    toast.success(response.data.message);
                } else {
                    toast.error(response.data.message);
                }
            })
            .catch(error => {
                console.log(error)
                toast.error('Erreur lors de l\'envoi de la demande d\'examen');
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Sélectionnez les examens complémentaires à effectuer:
                <select multiple={true} value={selectedExams} onChange={handleSelectChange}>
                    {examens.map((examen) => (
                        <option key={examen.IDEXAMENCOMPL} value={examen.IDEXAMENCOMPL}>
                            {examen.LIBELLEEXAMCOMPL}
                        </option>
                    ))}
                </select>
            </label>
            <button type="submit">Valider</button>
        </form>
    );
};

export default ExamensComplementaires;
