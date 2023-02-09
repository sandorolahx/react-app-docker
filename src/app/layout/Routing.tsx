import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from '../components/user/User';
import Layout from './Layout';
import NotFound from './NotFound';

const Routing = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<div>Home page</div>} />
                <Route path='user' element={<User />} />
                <Route path='contact' element={<>Contact page</>} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>
)

export default Routing;
