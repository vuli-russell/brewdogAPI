import React, {useContext} from "react";
import styles from "./Header.module.scss";
import { Link } from "@reach/router";
import { UserContext } from "../../context/userContext";

const Header = () => {

  const {signIn, signOut, user} = useContext(UserContext);

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
