import React, { useEffect, useState, useContext } from 'react';
import styles from './Gallery.module.scss';
import Card from './Card';
import { UserContext } from '../../context/userContext';
import { subscribeToFavourites } from '../../services/userServices';

const Gallery = (props) => {
  const { data, loadMoreBeers } = props;
  const { user } = useContext(UserContext);

  const [favBeers, setFavBeers] = useState(null);

  useEffect(() => {
    if (user) {
      const unsubscribe = subscribeToFavourites(user, setFavBeers);
      return () => unsubscribe();
    } else {
      setFavBeers(null);
    }
  }, [user]);

  return (
    <section className={styles.gallery}>
      {data ? data.length ? data.map(beer => <Card
        isFav={favBeers ? favBeers.some(fav => fav.id === beer.id) : false}
        key={beer.id}
        beer={beer}
      />) : <p>No Beers Found Matching Search Criteria</p> : <p>Loading Beers</p>}
      <button className={styles.loadMore} onClick={loadMoreBeers}>Load More</button>
    </section>
  );
};

export default Gallery;
