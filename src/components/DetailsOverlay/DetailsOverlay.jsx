import React from "react";
import styles from "./DetailsOverlay.module.scss";

const DetailsOverlay = (props) => {
  const { beer, handleCloseDetails, addToFav, removeFromFav, isFav } = props;
  const { name, description, image_url, abv, ibu, ebc, first_brewed, food_pairing, ingredients, method} = beer;
  return (
    <>
      <section className = {styles.overlay}>
        <h1>{name}</h1>
        <p>{description}</p>
        {/* <img src={image_url} alt=""/> */}
        <p>ABV: {abv}%</p>
        <p>IBU: {ibu}</p>
        <p>EVC: {ebc}</p>
        <p>First Brewed: {first_brewed}</p>
        <p>Food Pairings</p>
        <ul>{food_pairing.map(f => <li>{f}</li>)}</ul>
        <div className={styles.ingredients}>
          <h1>Ingredients</h1>
          <h2>Hops</h2>
          <ul>
            {ingredients.hops.map(h => <li>{h.name}</li>)}
          </ul>
          <h2>malt</h2>
          <ul>
            {ingredients.malt.map(m => <li>{m.name}</li>)}
          </ul>
          <h2>Yeast: {ingredients.yeast}</h2>
        </div>
        <div className={styles.method}>
          <p>Fermentation Temperature: {method.fermentation.temp.value}{method.fermentation.temp.unit}</p>
          <p>Mash Temperature: {method.mash_temp.map(m => `${m.temp.value}${m.temp.unit} for ${m.temp.duration}`)}</p>
        </div>

        <button onClick={handleCloseDetails}>close</button>
        {isFav ?
          <button onClick={removeFromFav}>remove from fav</button> :
          <button onClick={addToFav}>add to fav</button>
        }
        
      </section>
    </>
  );
};

export default DetailsOverlay;
