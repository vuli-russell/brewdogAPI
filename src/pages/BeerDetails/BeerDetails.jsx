import React, { useState, useEffect } from "react";
import styles from "./BeerDetails.module.scss";

const BeerDetails = (props) => {

  const beerID = /\d+$/.exec(props.beerID)

  const [beer, setBeer] = useState(null)

  const getData = () => {
    fetch(`https://api.punkapi.com/v2/beers/${beerID}`)
      .then(response => response.json())
      .then(data => setBeer(data[0]))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    getData()
  }, [])

  let detailsJSX = <h1> Loading </h1>;

  if (beer) {
    const { name, tagline, first_brewed, description, image_url, abv, ibu, target_fg, target_og, ebc, srm, ph, attenuation_level } = beer;

    detailsJSX = (
      <main className={styles.flexContainer}>
        <img src={image_url} alt={name} />
        <div className={styles.modalInfo}>
          <h1>{name} - {abv}% ABV</h1>
          <h2>{tagline}</h2>
          <h3>First Brewed: {first_brewed}</h3>
          <p>{description}</p>
          <div className={styles.Stats}>
            <h3>Stats</h3>
            <p>ABV: {abv}%</p>
            <p>IBU {ibu}</p>
            <p>FG: {target_fg}</p>
            <p>OG: {target_og}</p>
            <p>EBC: {ebc}</p>
            <p>SRM: {srm}</p>
            <p>PH: {ph}</p>
          </div>
        </div>
      </main>
    );
  }



  return (
    <>
      {detailsJSX}
    </>
  );
};

export default BeerDetails;
