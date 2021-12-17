import React from 'react';
import {
    Routes,
    Route,
    Redirect } from "react-router-dom";
import About from '../pages/about';
import Home from '../pages/home';

const BaseRouter = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/about' element={<About/>}/>
        </Routes>
    )
}

export default BaseRouter;
