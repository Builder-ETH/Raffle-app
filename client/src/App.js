import React, { Component } from "react";
import Home from "./pages/home";
import "./App.css";
import Raffles from "./pages/Raffles";
import modalForm from "./pages/eventAddModal";
import { Routes, Route } from "react-router-dom"
import Participate from "./pages/participate"; 
import CreateRaffle from "./pages/createRaffle";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/participate" element={<Participate/>}/>
    </Routes>
  )
}
export default App;
