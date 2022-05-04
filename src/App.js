import React from 'react'
import Header from './components/Header';
import Home from './pages/Home';
import { NewsContextProvider } from './components/NewsContext';
import { SportsContextProvider } from './components/SportsContext'
import { EntContextProvider } from './components/EntContext';
import { BussinessContextProvider } from './components/BussinessContext';
import News from "./components/News";
import Business from './pages/Business'
import Sport from './pages/Sport'
import Entertainment from './pages/Entertainment';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <EntContextProvider>
    <BussinessContextProvider>
    <SportsContextProvider>
     <NewsContextProvider>
     <Router>
       <Header />
       <Routes>
         <Route path="/" element={<News />}/>
         <Route path="/" element={<Home/>}/>
         <Route path="/business" element={<Business/>}/>
         <Route path="/sport" element={<Sport/>}/>
         <Route path="/entertainment" element={<Entertainment/>}/>
       </Routes>
     </Router>
     </NewsContextProvider>
     </SportsContextProvider>
     </BussinessContextProvider>
     </EntContextProvider>
    </>
  );
}

export default App;
