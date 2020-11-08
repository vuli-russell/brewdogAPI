import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './Card.module.scss';
import DetailsOverlay from '../../DetailsOverlay';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  const [isOverlayShown, setIsOverlayShown] = useState(false);
  const { addToFav, removeFromFav, beer, isFav } = props;
  const { name, tagline, image_url } = beer;

  const handleOpenDetails = () => { setIsOverlayShown(true); };
  const handleCloseDetails = () => { setIsOverlayShown(false); };

  const favIconClass = isFav ? styles.fav : styles.notFav;

  const handleFavClick = () => {
    if(isFav){
      removeFromFav()
    }else{
      addToFav()
    }
  }

  return (
    // <article className={styles.Card} style={isFav ? { backgroundColor: 'green' } : {}}>
    <article className={styles.Card} >
      <div className={`${styles.faIcon} ${favIconClass}`} onClick={handleFavClick}>
        <FontAwesomeIcon icon = {faHeart}/>
      </div>
      <h1>{name}</h1>
      <p>{tagline}</p>
      <img src={image_url} alt={name} />
      <div className={styles.moreInfo} onClick={handleOpenDetails}>
        <p>More Info</p>
      </div>
      {isOverlayShown
        ? ReactDOM.createPortal(<DetailsOverlay
            beer={beer}
            handleCloseDetails={handleCloseDetails}
            addToFav={addToFav}
            removeFromFav={removeFromFav}
            isFav={isFav}
            />, document.getElementById('root'))
        : null}
    </article>
  );
};

export default Card;
