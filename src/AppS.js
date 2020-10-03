import React from 'react';
import './AppS.css';
import HomeS  from './components/HomeS';
// import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

function AppS() {
  return (
    <div className="app">
       <Router>
         <HomeS />
         {/* <HomeClg /> */}
         {/* <HomeBsn /> */}
         {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default AppS;