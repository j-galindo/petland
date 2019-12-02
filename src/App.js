import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Navbar from "./Navbar"
import FilterNav from "./FilterNav"
import CardComponent from './CardComponent';
import Footer from "./Footer"
import Header from "./Header"


function App() {

 

  return (
    <div className="App">
      <Navbar/>
      <br/>
      <br/>
      <Header/>
      <CardComponent/>
      
      <Footer/>
    </div>
  );
}

export default App;
