import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './Card.module.scss';
import DetailsOverlay from '../../DetailsOverlay';

const Card = (props) => {
  const [isOverlayShown, setIsOverlayShown] = useState(false);
  const { addToFav, removeFromFav, beer, isFav } = props;
  const { name, tagline, image_url } = beer;

  const handleOpenDetails = () => { setIsOverlayShown(true); };
  const handleCloseDetails = () => { setIsOverlayShown(false); };

  return (
    <article className={styles.Card} style={isFav ? { backgroundColor: 'green' } : {}}>
      {isFav
        ? <button onClick={removeFromFav}>remove from fav</button>
        : <button onClick={addToFav}>add to fav</button>}
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
