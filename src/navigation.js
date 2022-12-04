import React from 'react';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from './screens/Home';
import Login from './screens/Login';

export default function Navigation() {


    return (

        <BrowserRouter>

            <Routes>

                <Route path='/home' element={<Home />} />

                <Route path="/" element={<Login />} />

                <Route path="*" element={<Navigate to="/" replace />} />

            </Routes>

        </BrowserRouter>

    )

}