import React from 'react';
import {
    Routes,
    Route,
    Redirect } from "react-router-dom";
import About from '../pages/about';
import CoreCompetence from '../pages/col_list/corecompetence';
import JabatanKritikal from '../pages/col_list/jabatankritikal';
import JFStrategis from '../pages/col_list/jfstrategis';
import JPTKritis from '../pages/col_list/jptkritis';
import LongList from '../pages/col_list/longlist';
import Proyeksi from '../pages/col_list/proyeksi';
import Rekomendasi from '../pages/col_list/rekomendasi';
import Contact from '../pages/contact';
import FAQ from '../pages/faq';
import Home from '../pages/home';
import Bottomup from '../pages/methodology/bottomup';
import Dovetailing from '../pages/methodology/dovetailing';
import Overview from '../pages/methodology/overview';
import Topdown from '../pages/methodology/topdown';

const BaseRouter = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/about' element={<About/>}/>
            {/* Metodologi */}
            <Route exact path='/metodologi/topdown' element={<Topdown/>}/>
            <Route exact path='/metodologi/bottomup' element={<Bottomup/>}/>
            <Route exact path='/metodologi/dovetailing' element={<Dovetailing/>}/>
            <Route exact path="/metodologi/overview" element={<Overview/>}/>
            {/* COL LIST */}
            <Route exact path='/daftar-jabatan-kritikal' element={<LongList/>}/>
            <Route exact path='/core-competence' element={<CoreCompetence/>} />
            <Route exact path='/jpt-kritikal' element={<JPTKritis/>} />
            <Route exact path='/rekomendasi-ja-jf' element={<Rekomendasi/>}/>
            <Route exact path='/proyeksi-masa-datang' element={<Proyeksi/>}/>
            <Route exact path='/jf-strategis' element={<JFStrategis/>}/>
            {/* CONTACT */}
            <Route exact path='/contact' element={<Contact/>}/>
            {/* FAQ */}
            <Route exact path='/FAQ' element={<FAQ/>}/>
        </Routes>
    )
}

export default BaseRouter;
