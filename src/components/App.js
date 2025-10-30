
import React from "react";
import '../styles/App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import About from './About'
import Home from './Home'
import Navigation from "./Navigation";
const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
