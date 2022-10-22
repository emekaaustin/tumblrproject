import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Textmodal from "./components/Textmodal";
import Loginnav from "./components/Loginnav";
import Navigation from './components/Navigation';
import Home from "./components/Home"
import Homepage from "./components/Homepage"
import Signup from "./components/Signup";



function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/newtext" element={<Textmodal />} />
              <Route path="/homepage" element={<Homepage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/loginnav" element={<Loginnav />} />
              <Route path="/signup" element={<Signup />} />
              <Route path='/navigation' element={<Navigation />}/>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
