import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import {Router} from "@reach/router"
import DashBoard from './pages/DashBoard/DashBoard';
import BeerDetails from "./pages/BeerDetails";
import Header from "./components/Header"
import PrivateRoutes from "./components/PrivateRoutes"
import Profile from "./components/Profile"
import {signIn, signOut, watchUser} from "./services/loginServices";

//font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBeer, faChevronDown } from '@fortawesome/free-solid-svg-icons'

library.add(faBeer, faChevronDown);


const App = () => {

  //signin Stuff
  const [user, setUser] = useState(null)
  useEffect(() => {
    const unsubscribe = watchUser(setUser);
    return () => unsubscribe();
  },[])

  return(
  <div className={styles.App}>
    <Header user={user} signIn={signIn} signOut={signOut}/>
    <Router className={styles.router} primary={false}>
      <DashBoard path="/" user={user}/>
      <BeerDetails path="/beer/:beerID"/>
      <PrivateRoutes path="/">
        <Profile path="profile" user={user}/>
      </PrivateRoutes>
    </Router>
  </div>
  )
}

export default App;
