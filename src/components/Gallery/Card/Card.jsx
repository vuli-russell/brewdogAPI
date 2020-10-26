import React from "react";
import styles from "./Card.module.scss";
import { useState } from "react";
import { Link } from "@reach/router"

const Card = (props) => {

  const [detailsShown, setDetailsShown] = useState(false)

  const {id,name,tagline,image_url} = props.beer

  const onClick = () => {
    setDetailsShown(!detailsShown)
  }

  return (
    <article onClick={onClick} className={styles.Card}>
      <h1>{name}</h1>
      <p>{tagline}</p>
      <img src={image_url} alt={name}/> 
      <Link to={`/beer_${id}`}>More Info</Link> 
    </article>
  );
};

export default Card;
