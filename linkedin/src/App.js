import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./components/Profile";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer'
import Navbar from './components/Navbar'


function App() {
  return (
      <div className="App">
        <Navbar />

        <MainPage username="user13" />

        <Footer/>
        
     </div>
);


}

export default App;