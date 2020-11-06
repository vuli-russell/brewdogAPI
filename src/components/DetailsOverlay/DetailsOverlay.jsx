import React from 'react';
import styles from './DetailsOverlay.module.scss';

const DetailsOverlay = (props) => {
  const { beer, handleCloseDetails, addToFav, removeFromFav, isFav } = props;
  const { name, description, image_url, abv, ibu, ebc, first_brewed, food_pairing, ingredients, method } = beer;
  return (
    <>
      <section className={styles.overlay}>
        <img src={image_url} alt='' />
        <div className={styles.infomation}>
          <h1>{name}</h1>
          <p>{description}</p>
          <p>ABV: {abv}%</p>
          <p>IBU: {ibu}</p>
          <p>EVC: {ebc}</p>
          <p>First Brewed: {first_brewed}</p>
          <p>Food Pairings</p>
          <ul>{food_pairing.map(f => <li key={f}>{f}</li>)}</ul>
          <div className={styles.ingredients}>
            <h1>Ingredients</h1>
            <h2>Hops</h2>
            <ul>
              {/* should also show amounts, when added and attribute */}
              {ingredients.hops.map(h => <li key={`${h.name}-${h.add}`}>{h.name}</li>)}
            </ul>
            <h2>malt</h2>
            <ul>
              {/* should also show amount */}
              {ingredients.malt.map(m => <li key={m.name}>{m.name}</li>)}
            </ul>
            <h2>Yeast: {ingredients.yeast}</h2>
          </div>
          <div className={styles.method}>
            <p>Fermentation Temperature: {method.fermentation.temp.value}{method.fermentation.temp.unit}</p>
            <p>Mash Temperature: {method.mash_temp.map(m => `${m.temp.value}${m.temp.unit} for ${m.temp.duration}`)}</p>
          </div>

          <button onClick={handleCloseDetails}>close</button>
          {isFav
            ? <button onClick={removeFromFav}>remove from fav</button>
            : <button onClick={addToFav}>add to fav</button>}
        </div>
      </section>
    </>
  );
};

export default DetailsOverlay;
