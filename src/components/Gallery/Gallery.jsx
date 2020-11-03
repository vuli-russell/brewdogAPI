import React from "react";
import styles from "./Gallery.module.scss";
import Card from "./Card"
import {firestore} from "../../firebase";
import { useEffect, useState } from "react";
import { setFav, removeFav, subscribeToFavourites } from "../../services/userServices";

const Gallery = (props) => {

  const {data, user} = props;

  const [favBeers, setFavBeers] = useState(null)
 
  useEffect(()=>{
    if(user){
      const unsubscribe = subscribeToFavourites(user,setFavBeers);
      return () => unsubscribe();
    }else{
      setFavBeers(null)
    }
  },[user])
  
  return (
    <section className={styles.gallery}>
      {data ? data.map(beer => <Card 
      isFav={favBeers ? favBeers.some(fav => fav.id===beer.id) : false} 
      key={beer.id} 
      addToFav={() => setFav(user,beer)}
      removeFromFav={() => removeFav(user,beer)} 
      beer={beer}
      />) : <p>Loading Beers</p>}
    </section>
  );
};

export default Gallery;
