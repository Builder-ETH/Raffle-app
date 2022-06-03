import React, { Component } from "react";
import Home from "./pages/home";
import "./App.css";
import Raffles from "./pages/Raffles";
import CreateRaffle from "./pages/createRaffle";

const App = () => {

  return (
    <>
    <Home />
    <Raffles />
    <CreateRaffle />
    </>
  )
}
export default App;
