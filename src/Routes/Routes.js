import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import User from '../Pages/User/User';

export default function RoutesApp() {
  return (
    <Routes>
        <Route element={<About />} path="/about" />
        <Route element={<User />} path="/user" />
        <Route element={<Home />} path="/" exact />
    </Routes>
  );
}
