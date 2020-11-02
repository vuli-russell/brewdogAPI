import React from "react";
import styles from "./Gallery.module.scss";
import Card from "./Card"
import {firestore} from "../../firebase";
import { useEffect, useState } from "react";
import { setFav, removeFav } from "../../services/userServices";

const Gallery = (props) => {

  const {data, user} = props;

  const [favBeers, setFavBeers] = useState(null)

  //do i need to unsubscribe from previous user
  useEffect(()=>{
    if(user){
      firestore.collection("users").doc(`${user.uid}`).onSnapshot(s => {
        if(s.exists){
          setFavBeers(s.data().favourites)
        }
      })
    } else {
      setFavBeers(null)
    }
  },[user])
  
  return (
    <section className={styles.gallery}>
      {data ? data.map(beer => <Card 
      isFav={favBeers ? favBeers.includes(beer.id) : false} 
      key={beer.id} 
      addToFav={() => setFav(user,beer)}
      removeFromFav={() => removeFav(user,beer)} 
      beer={beer}
      />) : <p>Loading Beers</p>}
    </section>
  );
};

export default Gallery;
