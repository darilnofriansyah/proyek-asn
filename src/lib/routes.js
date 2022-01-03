import React from 'react';
import {
    Routes,
    Route,
    Redirect } from "react-router-dom";
import About from '../pages/about';
import Home from '../pages/home';
import Bottomup from '../pages/methodology/bottomup';
import Topdown from '../pages/methodology/topdown';

const BaseRouter = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/metodologi/topdown' element={<Topdown/>}/>
            <Route exact path='/metodologi/bottomup' element={<Bottomup/>}/>
        </Routes>
    )
}

export default BaseRouter;
