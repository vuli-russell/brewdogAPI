import React from "react";
import styles from "./Card.module.scss";
import { Link } from "@reach/router"


const Card = (props) => {

  const { addToFav, removeFromFav, beer, isFav } = props
  const { id, name, tagline, image_url } = beer

  return (
    <article className={styles.Card} style={isFav ? { backgroundColor: "green" } : {}}>
      {isFav ?
        <button onClick={removeFromFav}>remove from fav</button> :
        <button onClick={addToFav}>add to fav</button>
      }
      <h1>{name}</h1>
      <p>{tagline}</p>
      <img src={image_url} alt={name} />
      <Link to={`/beer/beer_${id}`}>More Info</Link>
    </article>
  );
};

export default Card;
