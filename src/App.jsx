import React , {useState,useEffect}from 'react';
import styles from './App.module.scss';
import {Router} from "@reach/router"
import DashBoard from './pages/DashBoard/DashBoard';
import BeerDetails from "./pages/BeerDetails";


const App = () => {

  return(
  <Router>
    <DashBoard path="/"/>
    <BeerDetails path="/:beerID"/>
  </Router>
  )
}

export default App;
