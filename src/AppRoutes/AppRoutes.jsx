import React from 'react';
import Home from '../pages/Home/Home';
import Details from '../pages/Details/Details';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const AppRoutes = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/details" element={<Details/>}></Route>
      </Routes>

    </Router>
  );
};

export default AppRoutes; 

