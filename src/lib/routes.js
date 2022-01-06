import React from 'react';
import {
    Routes,
    Route,
    Redirect } from "react-router-dom";
import About from '../pages/about';
import JabatanKritikal from '../pages/col_list/jabatankritikal';
import LongList from '../pages/col_list/longlist';
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
            <Route exact path='/longlist' element={<LongList/>}/>
            <Route exact path='/jabatankritikal' element={<JabatanKritikal/>}/>
            <Route exact path='/contact' element={<Contact/>}/>
        </Routes>
    )
}

export default BaseRouter;
