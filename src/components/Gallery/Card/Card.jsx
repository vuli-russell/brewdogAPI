import React from "react";
import ReactDOM from 'react-dom';
import styles from "./Card.module.scss";
import DetailsModal from "./DetailsModal";
import { useState } from "react";
const Card = (props) => {

  const [detailsShown, setDetailsShown] = useState(false)

  const {name,tagline,image_url} = props.beer

  const onClick = () => {
    setDetailsShown(!detailsShown)
  }

  return (
    <article onClick={onClick} className={styles.Card}>
      <h1>{name}</h1>
      <p>{tagline}</p>
      <img src={image_url} alt={name}/> 
      {detailsShown ? ReactDOM.createPortal((<DetailsModal beer={props.beer} setDetailsShown={setDetailsShown} />), document.getElementById('root')): ""}     
    </article>
  );
};

export default Card;
