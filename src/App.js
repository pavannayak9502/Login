import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Auth from './Auth.js';
import Home from "./Home.js";
import "./App.css";

const App = () => {
  return (
    <>
    <div>
    <Router>
        <Routes>
        <Route path="/" element={<Auth />} />
            <Route path="/home" element={<Home/>} />
        </Routes>
    </Router>
    </div>
    </>
  );
};

export default App;
