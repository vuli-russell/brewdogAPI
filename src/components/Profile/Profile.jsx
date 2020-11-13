import React, { useContext, useState, useEffect } from 'react';
import styles from "./Profile.module.scss";
import { setFav, removeFav, subscribeToFavourites } from '../../services/userServices';
import Card from '../Gallery/Card';
import { UserContext } from '../../context/userContext';

const Profile = (props) => {
  const { user } = useContext(UserContext);
  const [favouriteBeers, setFavouriteBeers] = useState([]);

  useEffect(() => {
    if (user) {
      const unsubscribe = subscribeToFavourites(user, setFavouriteBeers);
      return () => unsubscribe();
    }
  }, [user]);

  return (
    <>
      {!user ? <h1>Loading User</h1>
        : <main className={styles.profile}>
            <div className={styles.profileInfo}>
              <img src={user.photoURL} alt='' />
              <div className={styles.infoText}>
                <h1>{user.displayName}</h1>
                <h2>{user.email}</h2>
                <h1>Favourite Beers</h1>
              </div>
            </div>
            <section className={styles.favouriteBeers}>
              {favouriteBeers.length
                ? favouriteBeers.map(beer =>
                  <Card
                    isFav
                    key={beer.id}
                    addToFav={() => setFav(user, beer)}
                    removeFromFav={() => removeFav(user, beer)}
                    beer={beer}
                  />)
                : <h1>No Favorite Beers Found</h1>}
            </section>
        </main>}
    </>
  );
};

export default Profile;
