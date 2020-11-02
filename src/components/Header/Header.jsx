import React from "react";
import styles from "./Header.module.scss";
import { Link } from "@reach/router";

const Header = (props) => {

  const {signIn, signOut, user} = props

  return (
    <header className={styles.header}>
      <Link to="/"><h1>BrewDog</h1></Link>
      <div className={styles.links}>
        <Link to="profile"><p>Profile</p></Link>
        {user ? <p onClick={signOut}>Logout</p> : 
        <>
          <p onClick={() => signIn("google")}>login with google</p>
          <p onClick={() => signIn("github")}>login with github</p>
        </>
        }
      </div>

    </header>
  );
};

export default Header;
