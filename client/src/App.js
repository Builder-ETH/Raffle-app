import React, { Component } from "react";
import Home from "./pages/home";
import "./App.css";
import Raffles from "./pages/Raffles";
import modalForm from "./pages/eventAddModal";

const App = () => {

  return (
    <>
    <modalForm />
    <Home>
      <modalForm />
    </Home>
    <Raffles />
    </>
  )
}
export default App;
