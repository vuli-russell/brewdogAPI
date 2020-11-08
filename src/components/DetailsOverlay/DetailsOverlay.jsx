import React, { useRef, useEffect } from "react";
import styles from "./DetailsOverlay.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faHeart, faTimes } from "@fortawesome/free-solid-svg-icons"

const DetailsOverlay = (props) => {
  const { beer, handleCloseDetails, handleFavClick, isFav } = props;
  const { name, description, image_url, abv, ibu, ebc, first_brewed, food_pairing, ingredients, method } = beer;

  const overlayElement = useRef(null);
  const ingredientsElement = useRef(null);
  const expandIngredientsElement = useRef(null);

  useEffect(() => {
    overlayElement.current.style.top = "0%"
  },[])
  
  const expandSection = () => {
    if(ingredientsElement.current.style.height){
      ingredientsElement.current.style.height = "";
      expandIngredientsElement.current.style.transform = "rotate(0deg)";
    }else{
      ingredientsElement.current.style.height = `${ingredientsElement.current.scrollHeight}px`;
      expandIngredientsElement.current.style.transform = "rotate(180deg)";
    }
  }

  const handleCloseClick = () => {
    overlayElement.current.style.top = "100%";
    setTimeout(() => {handleCloseDetails()},500);
  }

  const favIconstyles = isFav ? styles.fav : styles.notFav;
  
  console.log(ingredients.yeast)

  return (
    <>
      <section className={styles.overlay} ref={overlayElement}>
        <div className={`${styles.faIcon} ${styles.closeIcon}`} onClick={handleCloseClick}>
            <FontAwesomeIcon icon={faTimes}/>
        </div>
        <img src={image_url} alt="" />
        <div className={styles.infomation}>
          <h1>{name}</h1>            
          <div className={`${styles.faIcon} ${favIconstyles}`} onClick={handleFavClick}>
            <FontAwesomeIcon icon={faHeart}/>
          </div>
          <p>{description}</p>
          <h3>Numbers</h3>
          <p>ABV: {abv}%</p>
          <p>IBU: {ibu}</p>
          <p>EVC: {ebc}</p>
          <p>First Brewed: {first_brewed}</p>
          <h3>Food Pairings</h3>
          <ul>{food_pairing.map(f => <li key={f}>{f}</li>)}</ul>
          <div className={styles.ingredientsHeader} onClick={expandSection}>
            <h2>Ingredients and Method</h2>
            <div className={styles.faIcon} ref={expandIngredientsElement} >
                <FontAwesomeIcon icon={faChevronDown}/>
            </div>
          </div>
          <div className={styles.ingredients} ref={ingredientsElement}>
            <h3>Hops</h3>
            <ul>
              {ingredients.hops.map(h => <li 
                key={`${h.name}-${h.add}`}>
                  {h.name} - added at {h.add} - {h.attribute}
                </li>)}
            </ul>
            <h3>Malt</h3>
            <ul>
              {ingredients.malt.map(m => <li 
                key={m.name}>
                  {m.name} - {m.amount.value} {m.amount.unit}
                </li>)}
            </ul>
            <h3>Yeast</h3>
            <ul>
              <li>{ingredients.yeast}</li>
            </ul>
            <h2>Method</h2>
            <p>Fermentation Temperature: {method.fermentation.temp.value} {method.fermentation.temp.unit}</p>
            <p>Mash Temperature: {method.mash_temp.map(m => `${m.temp.value} ${m.temp.unit} ${m.temp.duration ? `for ${m.temp.duration}` : ""}`)}</p>
          </div> 
        </div>
      </section>
    </>
  );
};

export default DetailsOverlay;
