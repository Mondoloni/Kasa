import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../../index.scss';
import Home from '../../pages/Home/Home';
import Logement from '../../pages/Logement/Logement';
import APropos from '../../pages/APropos/Apropos';
import Error from '../Error/Error';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Router(){
return( 
<BrowserRouter >
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/APropos" element={<APropos/>} />
      <Route path="/Logement/:logementId" element={<Logement/>} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
</BrowserRouter>
);
}

export default Router