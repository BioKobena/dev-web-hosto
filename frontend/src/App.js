import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Option from './components/Option';
import Auth from './pages/Auth/Auth'; // Assuming you renamed the authentication component
import HomeRec from './pages/receptionniste/HomeRec';
import HomeInf from './pages/infirmier/HomeInf';
import HomeSag from './pages/sage-femme/HomeSag';
import HomeMed from './pages/medecin/HomeMed';
import Page404 from './pages/error/Page404';
import HomeAide from './pages/aide-soignante/HomeAide';
import Rdv from './pages/receptionniste/Rdv';
import Dossier from './pages/receptionniste/Dossier';
import PatientMed from './pages/infirmier/PatientMed';
import Vaccin from './pages/infirmier/Vaccin';
import PatientAide from './pages/aide-soignante/PatientAide';
import Nouveau from './pages/receptionniste/Nouveau';
import Ancien from './pages/receptionniste/Ancien';
import Consultation from './pages/medecin/Consultation';
import Details from './pages/medecin/Details';
import RdvMed from './pages/medecin/RdvMed';
import ConsultationDetails from './pages/medecin/ConsultationDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Auth />} />

        {/* Page de la receptionniste */}
        <Route path="/receptionniste/*" element={<HomeRec />}>
          <Route path="dossier/*" element={<Dossier />}>
            <Route index path="nouveau" element={<Nouveau />} />
            <Route path="ancien" element={<Ancien />} />
          </Route>
          <Route path="rdv" element={<Rdv />} />
        </Route>

        {/* Page de l'infirmier et ses onglets */}
        <Route path="/infirmier/*" element={<HomeInf />}>
          <Route index path="accueil" element={<PatientMed />} />
          <Route path="patient" element={<Vaccin />} />
        </Route>

        {/* Page de la sage femme */}
        <Route path="/sage-femme/*" element={<HomeSag />}>

        </Route>

        {/* Page du medecin et ses onglets */}
        <Route path="/medecin/*" element={<HomeMed />}>
          <Route index path="consultation" element={<Consultation />} />
          <Route path="consultation/:id" element={<ConsultationDetails />} />
          <Route index path="rdv" element={<RdvMed />} />

        </Route>

        {/* Page de l'aide soignante */}
        <Route path="/aide-soignante/*" element={<HomeAide />}>
          <Route index path="list-patient" element={<PatientAide />} />
        </Route>


        {/* Page d'erreur */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
