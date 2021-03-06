import React from 'react';
import styles from './App.module.scss';
import { Router } from '@reach/router';
import DashBoard from './pages/DashBoard/DashBoard';
import Header from './components/Header';
import PrivateRoutes from './components/PrivateRoutes';
import Profile from './components/Profile';
import { UserProvider } from './context/userContext';

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBeer, faChevronDown } from '@fortawesome/free-solid-svg-icons';

library.add(faBeer, faChevronDown);

const App = () => {
  return (
    <div className={styles.App}>
      <UserProvider>
        <Header />
        <Router className={styles.router} primary={false}>
          <DashBoard path='/' />
          <PrivateRoutes path='/profile'>
            <Profile path='/' />
          </PrivateRoutes>
        </Router>
      </UserProvider>
    </div>
  );
};

export default App;
