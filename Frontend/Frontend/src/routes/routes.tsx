import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ClientListing from '../pages/listing'
import ClientDetail from '../pages/detail';
import Loader from 'react-loader-spinner';



function ClientRoutes() {
  return (
    <Router>
      {/* <React.Suspense fallback={<Loader type="Oval" color="#00BFFF" height={80} width={80} />}> */}

      <Routes>
        <Route path="/" element={<ClientListing />} />
        <Route path="/client/:id" element={<ClientDetail />} />
      </Routes>
      {/* </React.Suspense> */}
    </Router>
  );
};

export default ClientRoutes;