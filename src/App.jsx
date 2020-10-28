import React , {useState,useEffect}from 'react';
import styles from './App.module.scss';
import {Router} from "@reach/router"
import DashBoard from './pages/DashBoard/DashBoard';
import BeerDetails from "./pages/BeerDetails";

//font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBeer, faChevronDown } from '@fortawesome/free-solid-svg-icons'

library.add(faBeer, faChevronDown);


const App = () => {

  return(
  <Router>
    <DashBoard path="/"/>
    <BeerDetails path="/:beerID"/>
  </Router>
  )
}

export default App;
