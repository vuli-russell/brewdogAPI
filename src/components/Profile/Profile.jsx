import React from "react";
import styles from "./Profile.module.scss";
import { getFavourites } from "../../services/userServices";
import { useState } from "react";
import { useEffect } from "react";
import BeerDetails from "../../pages/BeerDetails";

const Profile = (props) => {

  const {user} = props;
  const [ favouriteBeers, setFavouriteBeers ] = useState(null)
  const [ favouriteBeersData, setFavouriteBeersData ] = useState(null)
  
  useEffect(()=>{
    if(user){
      getFavourites(user)
      .then(r => setFavouriteBeers(r))
    }
  },[user])

  return (
    <>
    {!user ? <h1>Loading User</h1> : 
    <>
      <h1>{user.displayName}</h1>
      <h2>{user.email}</h2>
      <img src={user.photoURL} alt=""/>
      {favouriteBeers ? 
        favouriteBeers.map(beer => <h1>{beer}</h1>)
        :
        <h1>Loading Favourite Beers</h1>
      }
    </>
    }
    </>
  );
};

export default Profile;
