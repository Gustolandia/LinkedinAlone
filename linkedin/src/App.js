import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./components/Profile";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer'
import Navbar from './components/Navbar'


function App() {
  return (
    <Router>

      <div className="App">
        <Navbar />

        <Route path="/" exact render={(props) => <MainPage {...props} username={"user13"} />}/>
        <Route path="/:username" exact exact component={MainPage} />


        <Footer/>
        
     </div>
     </Router>
);


}

export default App;