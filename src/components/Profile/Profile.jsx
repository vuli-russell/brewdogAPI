import React, {useContext} from "react";
// import styles from "./Profile.module.scss";
import { setFav, removeFav, subscribeToFavourites } from "../../services/userServices";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../Gallery/Card"
import { UserContext } from "../../context/userContext";

const Profile = (props) => {

  const {user} = useContext(UserContext);
  const [ favouriteBeers, setFavouriteBeers ] = useState([])
  
  useEffect(()=>{
    if(user){
      let unsubscribe = subscribeToFavourites(user,setFavouriteBeers);
      return () => unsubscribe();
    }
  },[user])

  return (
    <>
    {!user ? <h1>Loading User</h1> : 
    <>
      <h1>{user.displayName}</h1>
      <h2>{user.email}</h2>
      <img src={user.photoURL} alt=""/>
      {favouriteBeers.length ? 
        favouriteBeers.map(beer =>    
          <Card 
            isFav={true}
            key={beer.id} 
            addToFav={() => setFav(user,beer)}
            removeFromFav={() => removeFav(user,beer)} 
            beer={beer}
          />)
        :
        <h1>No Favorite Beers Found</h1>
      }
    </>
    }
    </>
  );
};

export default Profile;
