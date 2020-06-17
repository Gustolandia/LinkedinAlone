import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./components/Profile";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Network from './components/Network';
import Feed from './components/Feed';



function App() {
  return (
    <div className="App">
      <Router>

      
          <Navbar />
          <Route path="/" exact component={Feed} />
          <Route path="/home" exact component={Feed} />
          <Route path="/network" exact component={Network} />

          <Route path="/username/:username" exact component={MainPage} />


          <Footer/>
        
     
      </Router>
    </div>
);


}

export default App;