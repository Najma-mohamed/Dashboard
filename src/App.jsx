import React from "react";
import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Users from "./pages/Use";

import Home from "./pages/home";
import Contact from "./pages/contact";



const App = () =>{
  return <>
  <Home />
  
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />}/>
    <Route path="/users" element={<Users />}/>
    <Route path="/contact" element={<Contact />} />
    
    
  </Routes>

  
  </>
}
export default App