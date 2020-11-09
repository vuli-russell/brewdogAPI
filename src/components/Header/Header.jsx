import React, { useContext } from 'react';
import styles from './Header.module.scss';
import { Link } from '@reach/router';
import { UserContext } from '../../context/userContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons"


const Header = () => {
  const { signIn, signOut, user } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <Link to='/'>
        <h1>
          <span role="img" aria-label="beer emoji">🍺</span>
          BrewDog Catalogue
          <span role="img" aria-label="beer emoji">🍺</span>
        </h1>
      </Link>
      <div className={styles.links}>
        <Link to='profile'><p>Profile</p></Link>
        {user ? <FontAwesomeIcon className={styles.faIcon} onClick={signOut} icon={faSignOutAlt}/>
          : <>
            <FontAwesomeIcon className={styles.faIcon} onClick={() => signIn('google')} icon={faGoogle}/>
          </>}
      </div>

    </header>
  );
};

export default Header;
