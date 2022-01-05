import React from 'react';
import {
    Routes,
    Route,
    Redirect } from "react-router-dom";
import About from '../pages/about';
import DownloadLaporan from '../pages/col_list/download';
import Contact from '../pages/contact';
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
            <Route exact path="/download" element={<DownloadLaporan/>}/>
            <Route exact path='/contact' element={<Contact/>}/>
        </Routes>
    )
}

export default BaseRouter;
